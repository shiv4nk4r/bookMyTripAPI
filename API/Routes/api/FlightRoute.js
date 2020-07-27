const flightRoute = require("express").Router();
const Flights = require("../../Model/Flights");
const verify = require("../verifyToken");

//View all the flights
flightRoute.get("/", verify, (req, res) => {
  const flights = Flights.find({}, (err, data) => {
    if (err) {
      res.status(401).send("Something bad happened");
    }
    res.send(data);
  });
});

//View the flight with specific ID
flightRoute.get("/:id", verify, (req, res) => {
  const { params } = req;
  const { id } = params;
  const flight = Flights.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(401).send("Something bad happened");
    }
    res.send(data);
  });
});

//Create a Flight
flightRoute.post("/create", verify, (req, res) => {
  const { body } = req;
  const { from, to, price } = body;

  if (!to || !from || !price)
    return res.status(400).send("Information Missing");

  const flight = new Flights({
    To: to,
    From: from,
    Price: price,
  });

  try {
    const savedFlight = flight.save();
    res.send({ flightID: flight._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = flightRoute;
