const { Router } = require('express');

const routes = Router();
routes.get("/", (req, res) => {
    res.send("Hello GeekHunter! 🤓")
});

module.exports = routes;