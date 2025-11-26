const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CompanyLoginSchema = new schema({
    companyName: { type: String, required: true },
    ownerName: { type: String },
    industryType: { type: String },

    email: { type: String, required: true, unique: true },
    contactNumber: { type: String },

    address: { type: String },
    location: {
        district: String,
        state: String
    },

    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },

    wasteTypesRequired: [String],
    minQuantityRequired: Number,

    gstNumber: String,
    companyLicenseNumber: String

}, { timestamps: true });

module.exports = mongoose.model("CompanyLogin", CompanyLoginSchema);
