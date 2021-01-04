const adController = require('../../controllers/ad.controller');
const uploadHandler = require('../../utils/uploadHandler');

const router = require('express').Router();
    
router.get(
    '/getAll',
    adController.getAll
);

router.post(
    '/create',
    uploadHandler('./ads', 'img'),
    adController.create
);

router.post(
    '/destroy',
    adController.destroy
);

module.exports = router;