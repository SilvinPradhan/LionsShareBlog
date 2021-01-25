const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Import Routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

// App configuration
const app = express();

// Database
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected.");
  } catch (err) {
    console.log("Something is wrong in the DB connection", err);
  }
};

// Run DB connection
db();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());

// Cors
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      origin: `${process.env.CLIENT_URL}`,
    })
  );
}

// Routes middlewares
app.use("/api", blogRoutes);
app.use("/api", authRoutes);

// Routes
// app.get("/api", (req, res) => {
//   res.json({ time: Date().toString() });
// });

// PORT
/* process.env.port is Heroku's port for Deployment */
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}.`);
});
