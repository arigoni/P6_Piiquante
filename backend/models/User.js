// Création d'un model user avec mongoose
const mongoose = require('mongoose');
require('mongoose-type-email');
// On rajoute ce validateur comme plugin
const uniqueValidator = require('mongoose-unique-validator');
const sanitizerPlugin = require('mongoose-sanitizer-plugin');

// Création du modèle User pour un stockage dans la base de données
const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Veuillez entrer votre adresse email"],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Veuillez entrer une adresse email correcte"]
      },
      password: {
        type: String,
        required: [true, "Veuillez choisir un mot de passe"]
      }
});

// uniqueValidator = évite que plusieurs utilisateurs s'inscrivent avec le même mail
userSchema.plugin(uniqueValidator);

// On utilise le HTML Sanitizer de Google Caja pour effectuer cette désinfection.
userSchema.plugin(sanitizerPlugin);

module.exports = mongoose.model('User', userSchema);