module.exports = firebase => {
    const router = require('express').Router();

    router.use('/user', require('./user.routes')(firebase));

    return router;
}