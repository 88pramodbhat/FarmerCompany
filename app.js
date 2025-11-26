const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const methodOverride = require("method-override");


// Routers
const farmerRoutes = require("./routes/farmerRoutes");
const companyRoutes = require("./routes/companyRoutes");


// MongoDB Connect
mongoose.connect("mongodb://127.0.0.1:27017/farmersDB")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Setup
app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

// Session + Flash
app.use(session({
  secret: "wasteSecretKey",
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use((req, res, next) => {
  res.locals.currentUser = req.session.user;
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  next();
});


// PAGE ROUTE
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// USE ROUTERS
app.use("/farmer", farmerRoutes);
app.use("/company", companyRoutes);

//login
app.get("/login", (req, res) => {
    res.render("login.ejs");
});


// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});

app.listen(8080, () => console.log("Server running at 8080"));
