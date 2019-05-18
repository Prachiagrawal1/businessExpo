var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var assert = require('assert');

var userSchema = new mongoose.Schema({
   username: String,
   password: String,
   name: {type : String},
   country: {type: String , required: true},
   flagUrl :{type: String},
   emailAddress: {type:String, unique: true }
});
userSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", userSchema);
User.on('index', function(err) { // <-- Wait for User's indexes to finish
  assert.ifError(err);
});
module.exports = User;