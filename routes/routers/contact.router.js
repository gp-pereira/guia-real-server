const contactController = require('../../controllers/contact.controller');
const router = require('express').Router();

router.post('/', contactController.createMessage);

module.exports = router;