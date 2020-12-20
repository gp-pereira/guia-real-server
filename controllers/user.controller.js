async function create (req, res) {
    return await global.db.create('user', {
        email: req.body.email,
        role: 'admin',
        // req.body.role,
        password: require('bcrypt').hashSync(req.body.password, 10),

    })
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
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
    const props = {}

    for (var prop in req.body) {
        if (prop === 'id') continue;
        props[prop] = req.body[prop];
    }

    return await global.db.update('user', { id: req.body.id }, props)
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