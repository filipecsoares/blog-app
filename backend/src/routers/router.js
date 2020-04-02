const { Router } = require('express');
const UserController = require('../controllers/UserController');
const routes = Router();
routes.get('/', (req, res) => {
    res.send('Hello GeekHunter!')
});
routes.post('/register', UserController.register);
routes.post('/login', UserController.login);

module.exports = routes;