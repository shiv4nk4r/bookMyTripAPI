const mongoose = require("mongoose");

const TicketSchema = new mongoose.Schema({
  Flight: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  Price: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});
