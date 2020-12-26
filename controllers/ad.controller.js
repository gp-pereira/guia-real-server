const { readFileSync, unlinkSync } = require('fs');

async function create (req, res) {
    const ad = { 
        imgUrl: req.file.path,
        title: req.body.title, 
        mimeType: req.file.mimetype 
    };

    return await global.db.create('ad', ad)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    try {
        const ads = await global.db.findAll('ad');
        ads.map(ad => 
            ad.dataValues.imgBuffer = Buffer.from(readFileSync(ad.imgUrl)).toString('base64')
        );

        return res.status(200).send(ads);
     
    } catch { return res.sendStatus(500); } 
}

async function destroy (req, res) {
    try {
        console.log('got here')
        const ad = await global.db.findOne('ad', { id: req.body.id });

        // delete the file
        unlinkSync(ad.imgUrl);

        await global.db.destroy('ad', req.body.id);

        return res.sendStatus(200);
    
    } catch { return res.status(500); }
}
                    
module.exports = {
    getAll,
    create,
    destroy,
};