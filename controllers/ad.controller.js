const { retrieveFileAsBuffer, deleteFile } = require('../utils/fileHandlers');

async function create (req, res) {
    const ad = { 
        title: req.body.title, 
        imgPath: req.file.path,
        imgMimetype: req.file.mimetype 
    };

    return await global.db.create('ad', ad)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    try {
        const ads = await global.db.findAll('ad');
        ads.forEach(
            ad => ad.dataValues.imgBuffer = retrieveFileAsBuffer(ad.imgPath)
        );

        return res.status(200).send(ads);
     
    } catch { return res.sendStatus(500); } 
}

async function destroy (req, res) {
    try {
        const ad = await global.db.findOne('ad', { id: req.body.id });

        deleteFile(ad.imgPath);

        await global.db.destroy('ad', req.body.id);

        return res.sendStatus(200);
    
    } catch { return res.status(500); }
}
              
module.exports = {
    getAll,
    create,
    destroy,
};