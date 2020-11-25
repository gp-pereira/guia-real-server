module.exports = firebase => {
    const userController = require('../controllers/user.controller')(firebase);
    const router = require('express').Router();
        
    router.get(
        '/getAll',
        userController.getAllUsers
    );

    router.get(
        '/getOne',
        userController.getOneUser
    );

    router.post(
        '/create',
        userController.createUser
    );

    router.post(
        '/edit',
        userController.editUser
    );

    router.post(
        '/delete',
        userController.deleteUser
    );

    return router;
}
