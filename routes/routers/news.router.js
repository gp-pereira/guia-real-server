const newsController = require('../../controllers/news.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    newsController.getAll
);

// router.get(
//     '/getOne',
//     newsController.getOne
// );

router.post(
    '/create',
    newsController.create
);

router.post(
    '/edit',
    newsController.edit
);

router.post(
    '/destroy',
    newsController.destroy
);

module.exports = router;