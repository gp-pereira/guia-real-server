const authController = require('../controllers/auth.controller');
const router = require('express').Router();

router.post(
    '/login',
    authController.isLogged,
    authController.login
);

module.exports = router;