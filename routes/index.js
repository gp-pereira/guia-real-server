const router = require('express').Router();

// these routers are stardard for most apps
router.use('/auth', require('./routers/auth.router'));
router.use('/user', require('./routers/user.router'));

router.use('/city', require('./routers/city.router'));

module.exports = router;

