const messageController = require('../../controllers/message.controller');
const router = require('express').Router();

router.get(
    '/getAllByCompany',
    messageController.getAllByCompany
)

router.post(
    '/readAllByCompany',
    messageController.readAllByCompany
)

router.post(
    '/send',
    messageController.send
);

module.exports = router;