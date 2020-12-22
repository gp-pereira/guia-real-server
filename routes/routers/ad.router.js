const adController = require('../../controllers/ad.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    adController.getAll
);

// router.get(
//     '/getOne',
//     adController.getOne
// );

router.post(
    '/create',
    adController.create
);

router.post(
    '/edit',
    adController.edit
);

router.post(
    '/destroy',
    adController.destroy
);

module.exports = router;