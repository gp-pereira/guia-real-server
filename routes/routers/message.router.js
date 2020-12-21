const messageController = require('../../controllers/message.controller');
const router = require('express').Router();

router.post(
    '/send',
    messageController.send
);

module.exports = router;