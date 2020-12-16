const router = require('express').Router();

// these routers are stardard for most apps
router.use('/auth', require('.routers/auth.router'));
router.use('/user', require('.routers/user.router'));

// this is an example router for an example model
router.use('/example', require('.routers/example.router'));

module.exports = router;

