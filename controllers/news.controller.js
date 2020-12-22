async function create (req, res) {
    return await global.db.create('news', req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    return await global.db.findAll('news')
        .then(allnews => res.status(200).send(allnews)) 
        .catch(err => res.sendStatus(500)); 
}

async function getOne (req, res) {
    return global.db.findOne('news', { id: req.body.id })
        .then(example => res.status(200).send(example)) 
        .catch(err => res.sendStatus(500)); 
}

async function edit (req, res) {
    return await global.db.update('news', { id: req.body.id }, req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500).send());
}

async function destroy (req, res) {
    return await global.db.destroy('news', req.body.id)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500));
}
                    
module.exports = {
    getAll,
    getOne,
    create,
    edit,
    destroy,
};