const router = require('express').Router();

router.use('/company', require('./routers/company.router'));
router.use('/partner', require('./routers/partner.router'));
router.use('/message', require('./routers/message.router'));
router.use('/contact', require('./routers/contact.router'));
router.use('/auth', require('./routers/auth.router'));
router.use('/user', require('./routers/user.router'));
router.use('/city', require('./routers/city.router'));
router.use('/news', require('./routers/news.router'));
router.use('/live', require('./routers/live.router'));
router.use('/ad', require('./routers/ad.router'));

module.exports = router;

