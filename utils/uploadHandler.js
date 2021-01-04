const multer = require('multer');

module.exports = (destination, formLabel) => {
    const storage = multer.diskStorage({ 
        destination,
        filename: (req, file, next) => {
            const extension = file.originalname.split('.').slice(-1).pop();
            next(null, `${require('nanoid').nanoid()}.${extension}`);
        }
    });
    
    return multer({ storage }).single(formLabel);
}