const cityController = require('../../controllers/city.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    cityController.getAll
);

router.get(
    '/getOne',
    cityController.getOne
);

router.post(
    '/create',
    cityController.create
);

router.post(
    '/edit',
    cityController.edit
);

router.post(
    '/destroy',
    cityController.destroy
);

module.exports = router;