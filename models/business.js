var mongoose = require("mongoose");

var businessSchema = new mongoose.Schema({
   logo: {type: String},
   name: {type: String},
   providerCountry: {type: String},
   recieverCountry: [String],
   aboutUs: {type: String},
   jd:  {type: String},
   contact: {
        phone: {type: String},
        emailAddress: {type: String},
        website: {type: String}
    }
});


var Business = mongoose.model("Business", businessSchema);
module.exports = Business;