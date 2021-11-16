const express = require('express');
// Appel du routeur avec la méthode mise à disposition par Express
const router = express.Router();
// On associe les fonctions aux différentes routes, on importe le controller
const sauceCtrl = require('../controllers/sauce');
// On importe le middleware auth pour sécuriser les routes
const auth = require('../middleware/auth');
//On importe le middleware multer pour la gestion des images
const multer = require('../middleware/multer-config');

// Routes
router.get('/', auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post('/', auth, multer, sauceCtrl.createSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);
router.post('/:id/like', auth, sauceCtrl.likeOrDislike); 

module.exports = router;