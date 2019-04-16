const express = require("express");
const mongoose = require("mongoose");
const http = require("http");
const bodyParser = require("body-parser");

const user = require('./routes/user/userRoutes');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Grab Port and mongoURI
const { PORT, mongoURI } = require("./utils/constants");

// Use Routes
// anything that goes to /api/user should return user obj
app.use('/api/user', user);

// Connect to Mongo DB
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Listen
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
