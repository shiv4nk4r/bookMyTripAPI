const apiRoute = require("express").Router();

//Getting all the child Routes
const airportRoute = require("./api/AirportRoute");
const accountRoute = require("./api/AccountRoute");
const flightRoute = require("./api/FlightRoute");
const ticketRoute = require("./api/TikcetRoute");

//Handling all the Routes
apiRoute.use("/airport", airportRoute);
apiRoute.use("/account", accountRoute);
apiRoute.use("/flight", flightRoute);
apiRoute.use("/ticket", ticketRoute);

module.exports = apiRoute;
