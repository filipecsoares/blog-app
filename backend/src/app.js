const express = require('express');
const routes = require('./routers/router');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,    
  useUnifiedTopology: true  
  },  () => console.log('Connected to the database!'));

app.use(cors());
app.use(express.json());
const PORT = 3333;

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});