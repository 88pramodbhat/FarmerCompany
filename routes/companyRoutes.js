const express = require("express");
const router = express.Router();
const CompanyLogin = require("../models/companylogin");

// -------------------- LOGIN / REGISTER -------------------- //

// Show company login/registration form
router.get("/login", (req, res) => {
    res.render("companylogin.ejs");
});

// Handle signup/login for company
router.post("/login", async (req, res) => {
    try {
        const {
            companyName, ownerName, industryType,
            email, contactNumber,
            address, district, state,
            wasteTypesRequired, minQuantityRequired,
            gstNumber, companyLicenseNumber,
            password
        } = req.body;

        // Check if company already exists
        let company = await CompanyLogin.findOne({ email });

        // If NOT found → create new
        if (!company) {
            company = new CompanyLogin({
                companyName,
                ownerName,
                industryType,
                email,
                contactNumber,
                address,
                location: { district, state },
                password,
                wasteTypesRequired: Array.isArray(wasteTypesRequired)
                    ? wasteTypesRequired
                    : [wasteTypesRequired],
                minQuantityRequired,
                gstNumber,
                companyLicenseNumber
            });

            await company.save();
        }

        // Save session
        req.session.user = {
            type: "company",
            email: company.email
        };

        req.flash("success", "Company Login Successful!");
        res.redirect("/company/listings");

    } catch (err) {
        console.log(err);
        res.send("Error creating or logging in company");
    }
});


// -------------------- COMPANY LISTINGS -------------------- //

// All company listings
router.get("/listings", async (req, res) => {
    try {
        const allistings = await CompanyLogin.find({});
        res.render("indexcompany.ejs", { allistings });
    } catch (err) {
        res.send("Error fetching company listings");
    }
});

// SHOW PAGE — Always keep this AFTER /listings
router.get("/:id", async (req, res) => {
    const listing = await CompanyLogin.findById(req.params.id);
    if (!listing) return res.send("Company listing not found");
    res.render("showcompany.ejs", { listing });
});

// EDIT PAGE
router.get("/:id/edit", async (req, res) => {
    const listing = await CompanyLogin.findById(req.params.id);
    if (!listing) return res.send("Company listing not found");
    res.render("companyedit.ejs", { listing });
});

// UPDATE listing
router.put("/listing/:id", async (req, res) => {
    await CompanyLogin.findByIdAndUpdate(req.params.id, req.body);
    req.flash("success", "Company listing updated");
    res.redirect("/company/listings");
});

// DELETE listing
router.delete("/:id", async (req, res) => {
    await CompanyLogin.findByIdAndDelete(req.params.id);
    req.flash("success", "Company listing deleted");
    res.redirect("/company/listings");
});

module.exports = router;
