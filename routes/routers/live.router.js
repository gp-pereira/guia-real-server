const liveController = require('../../controllers/live.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    liveController.getAll
);

// router.get(
//     '/getOne',
//     liveController.getOne
// );

router.post(
    '/create',
    liveController.create
);

router.post(
    '/edit',
    liveController.edit
);

router.post(
    '/destroy',
    liveController.destroy
);

module.exports = router;