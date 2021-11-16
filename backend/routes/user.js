const express = require('express');
// On crée un router avec la méthode mise à disposition par Express
const router = express.Router();
// On associe les fonctions aux différentes routes, on importe le controller
const userCtrl = require('../controllers/user');
const verifyPassword = require('../middleware/verifyPassword');

// Routes
router.post('/signup', verifyPassword, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;