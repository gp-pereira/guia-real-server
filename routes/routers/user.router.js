const userController = require('../../controllers/user.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    userController.getAll
);

router.get(
    '/getOne',
    userController.getOne
);

router.post(
    '/create',
    userController.create
);

router.post(
    '/edit',
    userController.edit
);

router.post(
    '/destroy',
    userController.destroy
);

router.post(
    '/changePassword',
    userController.changePassword
)

module.exports = router;