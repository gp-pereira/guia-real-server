async function create (req, res) {
    req.body.password = require('bcrypt').hashSync(req.body.password, 10);

    return await global.db.create('user', req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => console.log(err))
}

async function getAll (req, res) {
    return await global.db.findAll('user')
        .then(users => res.status(200).send(users)) 
        .catch(err => res.sendStatus(500)); 
}

async function getOne (req, res) {
    return global.db.findOne('user', { id: req.body.id })
        .then(user => res.status(200).send(user)) 
        .catch(err => res.sendStatus(500)); 
}

async function edit (req, res) {
    return await global.db.update('user', { id: req.body.id }, req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500).send());
}

async function destroy (req, res) {
    return await global.db.destroy('user', req.body.id)
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