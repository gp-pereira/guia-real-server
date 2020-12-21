const router = require('express').Router();

// these routers are stardard for most apps
router.use('/auth', require('./routers/auth.router'));
router.use('/user', require('./routers/user.router'));

router.use('/city', require('./routers/city.router'));
router.use('/company', require('./routers/company.router'));
router.use('/partner', require('./routers/partner.router'));

module.exports = router;

