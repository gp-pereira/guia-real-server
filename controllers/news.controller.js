const { retrieveFileAsBuffer, deleteFile } = require('../utils/fileHandlers');

async function getAll (req, res) {
    try {
        const allNews = await global.db.findAll('news');
        allNews.forEach(news => {
            if (news.imgPath) news.dataValues.imgBuffer = retrieveFileAsBuffer(news.imgPath)
        });
        
        return res.status(200).send(allNews);

    } catch (err) { console.log(err); return res.sendStatus(500); } 
}
    
// async function getOne (req, res) {
//     return global.db.findOne('news', { id: req.body.id })
//         .then(example => res.status(200).send(example)) 
//         .catch(err => res.sendStatus(500)); 
// }
        
async function create (req, res) {
    const news = { 
        title: req.body.title, 
        content: req.body.content,
    };

    if (req.file) {
        news['imgPath'] = req.file.path;
        news['imgMimetype'] = req.file.mimetype; 
    }

    return await global.db.create('news', news)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.sendStatus(500))
}

async function edit (req, res) {
    const news = { 
        title: req.body.title, 
        content: req.body.content,
    };
    
    if (req.file) {
        news['imgPath'] = req.file.path;
        news['imgMimetype'] = req.file.mimetype; 
    }

    console.log(news, req.body.id);

    return await global.db.update('news', { id: req.body.id }, news)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.sendStatus(500));
}

async function destroy (req, res) {
    try {
        const news = await global.db.findOne('news', { id: req.body.id });

        deleteFile(news.imgPath);

        await global.db.destroy('news', req.body.id);

        return res.sendStatus(200);
    
    } catch { return res.sendStatus(500); }
}
                    
module.exports = {
    getAll,
    // getOne,
    create,
    edit,
    destroy,
};