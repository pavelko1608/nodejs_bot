var express = require('express');
var mongoose = require("mongoose");
var router = express.Router();
var app = express();
var User = require("../models/User");
var db = require("../db");

// GET home page. 
router.get("/sendCars", function(req,res) {
	collection = db.collection('cars');
	collection.find().toArray(function(err, cars) {
		res.send(cars);
	});
});

module.exports = router;
