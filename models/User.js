var mongoose = require("mongoose");
//var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;
mongoose.connect("mongodb://localhost:27017/telebot", {useMongoClient: true});
//autoIncrement.initialize(connection);


//USER SCHEMA
var UserSchema = mongoose.Schema({
	// id: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: "User"
	// },
	username: {
		type: String
	},
	username_id: {
		type: Number
	},
	Alg_practice: {
		type: Number
	},
	Data_processing_practice: {
		type: Number
	},
	ukr:  {
		type: Number
	},
	PT: {
		type: Number
	},
	Calculus_practice: {
		type: Number
	},
	Discmath_practice: {
		type: Number
	},
	EOM_practice: {
		type: Number
	}
});

//UserSchema.plugin(autoIncrement.plugin, 'User');
var User = module.exports = mongoose.model("User", UserSchema);