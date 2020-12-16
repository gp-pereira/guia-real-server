const exampleController = require('../../controllers/example.controller');
const router = require('express').Router();
        
// simple crud routes for example model

router.get(
    '/getAll',
    exampleController.getAll
);

router.get(
    '/getOne',
    exampleController.getOne
);

router.post(
    '/create',
    exampleController.create
);

router.post(
    '/edit',
    exampleController.edit
);

router.post(
    '/destroy',
    exampleController.destroy
);

module.exports = router;