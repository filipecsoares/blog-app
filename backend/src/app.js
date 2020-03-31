const express = require("express");
const routes = require('./routers/router');
const app = express();
app.use(express.json());
const PORT = 3333;

app.use(routes);
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});