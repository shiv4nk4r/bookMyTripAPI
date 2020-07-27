const ticketRoute = require("express").Router();
const Ticket = require("../../Model/Ticket");
const verify = require("../verifyToken");

// View All the tickets
ticketRoute.get("/", verify, (req, res) => {
  const tickets = Ticket.find({}, (err, data) => {
    if (err) {
      res.status(400).send("Internal Error");
    }
    res.send(data);
  });
});

//View One ticket by Ticket ID
ticketRoute.get("/:id", verify, (req, res) => {
  const { params } = req;
  const { id } = params;
  const ticket = Ticket.find({ _id: id }, (err, data) => {
    if (err) {
      res.status(400).send("Internal Error");
    }
    res.send(data);
  });
});

//View Ticket by one User
ticketRoute.get("/user/:id", verify, (req, res) => {
  const { params } = req;
  const { id } = params;
  const ticket = Ticket.find(
    { userID: id },
    (err,
    (data) => {
      if (err) {
        res.status(400).send("Internal Error");
      }
      res.send(data);
    })
  );
});

//View Tickets by FLight
ticketRoute.get("/flight/:id", verify, (req, res) => {
  const { params } = req;
  const { id } = params;
  const ticket = Ticket.find(
    { Flight: id },
    (err,
    (data) => {
      if (err) {
        res.status(400).send("Internal Error");
      }
      res.send(data);
    })
  );
});

//Create A ticket
ticketRoute.post("/create", verify, (req, res) => {
  const { body } = req;
  const { userId, flightID, price } = body;

  const ticket = new Ticket({
    Flight: flightID,
    userID: userId,
    Price: price,
  });

  try {
    const savedTicket = ticket.save();
    res.send({ ticketID: ticket._id });
  } catch (err) {
    res.end(err);
  }
});

//Delte A Ticket
ticketRoute.post("/delete/:id", verify, (req, res) => {
  const { params } = req;
  const { id } = params;
  const ticket = Ticket.remove({ _id: id }, (err, data) => {
    if (err) {
      res.send("Internal Server Erro");
    }
    res.send(data);
  });
});

module.exports = ticketRoute;
