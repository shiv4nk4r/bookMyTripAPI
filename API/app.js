const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");

//Specifying the port number to run the API service on
const port = process.env.PORT || 5000;

//Importing all the main routes
const homeRoute = require("./Routes/homeRoute");
const apiRoute = require("./Routes/API");

//Middlewares
dotenv.config();

mongoose.connect(process.env.DB_CONNECT, () =>
  console.log("Connected to the Database")
);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Handling the Routes
app.use("/", homeRoute);
app.use("/api", apiRoute);

app.listen(port, () => console.log("Server is Up and Running"));
