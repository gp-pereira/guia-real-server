const newsController = require('../../controllers/news.controller');
const uploadHandler = require('../../utils/uploadHandler');

const router = require('express').Router();

router.get(
    '/getAll',
    newsController.getAll
);
    
router.get(
    '/getOne',
    newsController.getOne
);
        
router.post(
    '/create',
    uploadHandler('./news', 'img'),
    newsController.create
);

router.post(
    '/edit',
    uploadHandler('./news', 'img'),
    newsController.edit
);

router.post(
    '/destroy',
    newsController.destroy
);

module.exports = router;