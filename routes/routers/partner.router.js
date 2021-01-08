const companyController = require('../../controllers/partner.controller');
const router = require('express').Router();
        
router.get(
    '/getAll',
    companyController.getAll
);

router.get(
    '/getAllByCity',
    companyController.getAllByCity
);


// router.get(
//     '/getOne',
//     companyController.getOne
// );

router.post(
    '/create',
    companyController.create
);

router.post(
    '/edit',
    companyController.edit
);

router.post(
    '/destroy',
    companyController.destroy
);

module.exports = router;