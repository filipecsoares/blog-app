const { Router } = require('express');
const authenticate = require("../midlewares/auth");
const UserController = require('../controllers/UserController');
const routes = Router();
routes.get('/', (req, res) => {
    res.send('Hello GeekHunter!')
});
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);
routes.get('/users', authenticate, UserController.index);

module.exports = routes;