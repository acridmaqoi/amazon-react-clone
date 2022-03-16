const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.get("/sam", (request, response) => response.status(200).send("sup bro"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request recieved:", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);
