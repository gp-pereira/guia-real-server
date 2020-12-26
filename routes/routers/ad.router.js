const adController = require('../../controllers/ad.controller');
const router = require('express').Router();
    
const multer = require('multer');
const storage = multer.diskStorage({
    destination: './ads',
    filename: async (req, file, next) => {
        const extension = file.originalname.split('.').slice(-1).pop();

        next(null, `${require('nanoid').nanoid()}.${extension}`);
    }
});
const upload = multer({ storage: storage });

router.get(
    '/getAll',
    adController.getAll
);

router.post(
    '/create',
    upload.single('img'),
    adController.create
);

router.post(
    '/destroy',
    adController.destroy
);

module.exports = router;