const airportRoute = require("express").Router();
const Airport = require("../../Model/Airport");
const verify = require("../verifyToken");

//Route to get all the airports
airportRoute.get("/", verify, async (req, res) => {
  const airports = await Airport.find({}, (err, data) => {
    if (err) {
      res.send(err);
      next();
    }
    res.send(data);
  });
});

//Route to View the airport by CODE
airportRoute.get("/:code", verify, async (req, res) => {
  const { params } = req;
  const { code } = params;
  const airport = await Airport.find({ code: code }, (err, data) => {
    if (err) {
      res.send(err);
    }
    res.send(data);
  });
});

//Route to delete an Airport
airportRoute.post("/remove/:code", verify, async (req, res) => {
  const { params } = req;
  const { code } = params;
  const removeAirport = await Airport.remove({ code: code }, (err) => {
    if (err) {
      res.send(err);
      next();
    }
    res.send(`removed ${code}`);
  });
});

//Route to Create an Airport
airportRoute.post("/create", verify, async (req, res) => {
  const { body } = req;
  const { name, code, location } = body;
  let airport = new Airport({
    name: name,
    code: code,
    location: location,
  });
  try {
    const savedAirport = await airport.save();
    res.send({ airport: airport._id });
  } catch (err) {
    res.send(err);
  }
});

module.exports = airportRoute;
