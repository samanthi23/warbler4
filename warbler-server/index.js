require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");
// instead of authRoutes we'll say messagesRoutes
const messagesRoute = require("./routes/messages");
const db = require("./models");
const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

// include messagesRoutes right over here
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", messagesRoutes);

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server is starting on port ${PORT}`);
});
