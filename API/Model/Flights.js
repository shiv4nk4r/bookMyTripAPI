const mongoose = require("mongoose");
var Float = require("mongoose-float").loadType(mongoose);

const flightSchema = new mongoose.Schema({
  From: {
    type: String,
    required: true,
  },
  To: {
    type: String,
    required: true,
  },
  Price: {
    type: Float,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Flights", flightSchema);
