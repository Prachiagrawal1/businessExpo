var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    request = require('request'),
    methodOverride = require("method-override"),
    passport = require('passport'),
    localStrategy = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    assert = require('assert');

//requiring models
var User = require('./models/users');
var Business = require('./models/business');
var seedDB = require("./businessSeed");

// mongoose.connect("mongodb://localhost:27017/businessExpo",{ useNewUrlParser: true});
var mongoDB = 'mongodb://kriti09:rachana123@ds351455.mlab.com:51455/businessexpo';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//seed the database
seedDB();

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/"));

//passport and session confguration
app.use(require("express-session")({
    secret: "hate you!!",
    resave: false,
    saveUninitialized: false
 }));
 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new localStrategy(User.authenticate()));
 passport.serializeUser(User.serializeUser());
 passport.deserializeUser(User.deserializeUser());
 
function flagRequest (userCountry){
    var urlFlag = 'https://restcountries.eu/rest/v2/name/'+ userCountry+'?fullText=true';
    request(urlFlag, function(err,  response, body){
        if(err)
            console.log(err);
        else{
            if(response.statusCode == 200){
                data = JSON.parse(body);
                    return data.flag;
            };
        }     
    });
};

 app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
 });


app.get('/signin', (req, res) => {
    res.render('signin');
});

app.post('/signin', (req, res) => {
    var flagUrl = flagRequest(req.body.country);
    var newUser = new User({
        username: req.body.username,
        emailAddress: req.body.emailAddress,
        name: req.body.name,
        country : req.body.country,
        flagUrl : flagUrl
     });
     User.register(newUser, req.body.password, function(err, user){
        if(err){
           // console.log(err);
        //    req.flash("error", err.message);
           return res.redirect("login");
        }else{
           passport.authenticate("local")(req, res, function(){
              res.redirect("/");
           });
        }
     });
})
app.get('/login', (req, res) => {
    res.render('login');
});
app.post('/login', passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login"
}),(req, res) => {
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
 });
app.get('/', isLoggedIn ,(req, res) => {
    if(req.query.country && req.query.country !='all'){
        var selectedCountry = req.query.country;
        Business.find({'providerCountry' : selectedCountry}, (err, data) => {
            if(err){
                console.log(err);
            }else{
                res.render('index', {data: data}); 
            }
        })
    }
    Business.find({}, (err, dataB) => {
        if(err){
            console.log(err);
        }else{
            res.render('index', {data: dataB}); 
        }
    });
});
app.get('/:country/:id', isLoggedIn ,(req, res) => {
    Business.findById({'_id' : req.params.id}, (err,data) =>{
        res.render('job.ejs', {data : data});
    })
});
function isLoggedIn (req, res, next) {
    if(req.isAuthenticated()){
        return next();
     }else{
        // req.flash("error", "You need to be logged in to do that")
        res.redirect("/login");
  };
}

app.listen(3000, function(){
    console.log("Server Is Listening to PORT: 3000");
});