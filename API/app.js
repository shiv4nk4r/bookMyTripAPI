const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;

const homeRoute = require("./Routes/homeRoute");

app.use(cors());

app.use("/", homeRoute);

app.listen(port, () => console.log("Server is Up and Running"));
