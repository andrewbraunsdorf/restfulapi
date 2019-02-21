const mongoose = require("monngoose");
const Schema = mongoose.Schema;

//create ninja Schema & model
const NinjaSchema = new Schema ({
	name: {
		type: String,
		required: [true, "Name field is required"]
	},
	rank: {
		type: String
	},
	avaiable: {
		type: Boolean,
		default: false
	}
	// add in geolocation
});

const Ninja = mongoose.model("ninja", NinjaSchema);

module.exports = Ninja; 

