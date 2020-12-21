const router = require('express').Router();

// these routers are stardard for most apps
router.use('/auth', require('./routers/auth.router'));
router.use('/user', require('./routers/user.router'));

router.use('/city', require('./routers/city.router'));
router.use('/company', require('./routers/company.router'));
<<<<<<< HEAD
router.use('/partner', require('./routers/partner.router'));
=======
router.use('/message', require('./routers/message.router'));
>>>>>>> 5b816c42470109c80ba39986ec937d0bc3556bc0

module.exports = router;

