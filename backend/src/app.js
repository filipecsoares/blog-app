const express = require("express");
const morgan = require("morgan");
const routes = require("./routers/router");
const mongoose = require("mongoose");
const cors = require("cors");
const requestErros = require('./midlewares/request-errors');
require("dotenv").config();
const app = express();
app.use(morgan("common"));

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => console.log("Connected to the database!")
);
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:3000"
  })
);
app.use(express.json());
app.use(routes);
app.use(requestErros.notFound);
app.use(requestErros.errorHandling);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
