const mongoose = require("mongoose");
const schema = mongoose.Schema;
const passportLocalMongoose=require("passport-local-mongoose")

const FarmerSchema = new schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});


module.exports = mongoose.model("FarmerLogin", FarmerSchema);
