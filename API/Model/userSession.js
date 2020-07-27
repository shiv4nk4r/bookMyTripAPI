const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    default: new Date().getTime(),
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  loggedOut: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("UserSessions", sessionSchema);
