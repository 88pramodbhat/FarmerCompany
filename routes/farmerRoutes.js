const express = require("express");
const router = express.Router();

const FarmersListing = require("../models/FarmersListing");
const FarmerLogin = require("../models/farmerlogin");

const multer = require("multer");
const path = require("path");
const fs = require("fs");

// ================= MULTER SETUP =================
const uploadPath = path.join(__dirname, "..", "public/uploads");

if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// ================= ROUTES =================

// ⭐ Login page
router.get("/login", (req, res) => {
    res.render("farmerlogin.ejs");
});

// ⭐ Handle login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    let farmer = await FarmerLogin.findOne({ email });

    if (!farmer) {
        farmer = new FarmerLogin({ email, password });
        await farmer.save();
    }

    req.session.user = { type: "farmer", email: farmer.email };

    req.flash("success", "Login successful!");
    res.redirect("/farmer/listings");
});





// ⭐ Show all farmers listings
router.get("/listings", async (req, res) => {
    const allistings = await FarmersListing.find({});
    res.render("index.ejs", { allistings });
});

// ⭐ New listing form
router.get("/newlisting", (req, res) => {
    res.render("newlisting.ejs");
});

// ⭐ Create new listing
router.post("/newlisting", upload.single("image"), async (req, res) => {
    const { farmerName, wastetype, quantity, location, contactPhone } = req.body;

    const newlisting = new FarmersListing({
        farmerName,
        wastetype,
        quantity,
        location,
        contactPhone,
        image: "/uploads/" + req.file.filename,
    });

    await newlisting.save();
    req.flash("success", "Listing created");
    res.redirect("/farmer/listings");
});






// ⭐ Show single listing page
router.get("/:id", async (req, res) => {
    const listing = await FarmersListing.findById(req.params.id);
    res.render("show.ejs", { listing });
});

// ⭐ Edit form
router.get("/:id/edit", async (req, res) => {
    const listing = await FarmersListing.findById(req.params.id);
    res.render("edit.ejs", { listing });
});

// ⭐ Update listing
router.put("/:id", upload.single("image"), async (req, res) => {
    const { farmerName, wastetype, quantity, location, contactPhone } = req.body;
    const updateData = { farmerName, wastetype, quantity, location, contactPhone };

    // If new image uploaded → replace old one
    if (req.file) {
        updateData.image = "/uploads/" + req.file.filename;
    }

    await FarmersListing.findByIdAndUpdate(req.params.id, updateData);
    req.flash("success", "Listing updated!");
    res.redirect("/farmer/listings");
});

// ⭐ Delete listing
router.delete("/:id", async (req, res) => {
    const listing = await FarmersListing.findById(req.params.id);

    // Remove image file
    if (listing && listing.image) {
        const filepath = path.join(__dirname, "..", "public", listing.image);
        if (fs.existsSync(filepath)) {
            fs.unlinkSync(filepath);
        }
    }

    await FarmersListing.findByIdAndDelete(req.params.id);
    req.flash("success", "Listing deleted!");
    res.redirect("/farmer/listings");
});

// ================= LOGIN ROUTES =================





module.exports = router;
