const passwordValidator = require('password-validator');

// Schéma de mot de passe plus sécure
const passwordSchema = new passwordValidator();

// Contraintes du mot de passe
passwordSchema
.is().min(8)                                 
.has().uppercase()                             
.has().lowercase()                             
.has().digits()                                 
.has().not().spaces()                           
.is().not().oneOf(['Passw0rd', 'Password123']); 

module.exports = passwordSchema;