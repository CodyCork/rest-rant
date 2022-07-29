const router = require("express").Router();
const places = require("../models/places.js");

router.post("/", (req, res) => {
  // console.log(req.body);
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = "http://placekitten.com/400/400";
  }
  if (!req.body.city) {
    req.body.city = "Anytown";
  }
  if (!req.body.state) {
    req.body.state = "USA";
  }
  places.push(req.body);
  res.redirect("/places");
});

router.get("/new", (req, res) => {
  res.render("places/new");
});

router.get("/", (req, res) => {
  // let places = [
  //   {
  //     name: "H-Thai-ML",
  //     city: "Seattle",
  //     state: "WA",
  //     cuisine: "Thai, Pan-Asian",
  //     pic: "css/images/thaiNoodles.jpg",
  //   },
  //   {
  //     name: "Coding Cat Cafe",
  //     city: "Phoenix",
  //     state: "AZ",
  //     cuisine: "Coffee, Bakery",
  //     pic: "css/images/pastry.jpg",
  //   },
  // ];

  res.render("places/index", { places });
});

module.exports = router;
