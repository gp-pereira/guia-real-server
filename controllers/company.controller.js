async function create (req, res) {
    return await global.db.create('company', req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    return await global.db.findAll('company')
        .then(cities => res.status(200).send(cities)) 
        .catch(err => res.sendStatus(500)); 
}

async function getOne (req, res) {
    return global.db.findOne('company', { id: req.query.id })
        .then(example => res.status(200).send(example)) 
        .catch(err => res.sendStatus(500)); 
}

async function edit (req, res) {
    return await global.db.update('company', { id: req.body.id }, req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500).send());
}

async function destroy (req, res) {
    try {
        const company = await global.db.findOne('company', { id: req.body.id });

        const users = await company.getUsers();

        if (users.length > 0)
            return res.status(409).send({ users });

        const messages = await company.getMessages();

        for (let i=0; i<messages.length; i++)
            await global.db.destroy('message', messages[i].id);

        await company.destroy();

        return res.sendStatus(200);

    } catch (err) { console.log(err); return res.status(500); }
}
                    
module.exports = {
    getAll,
    getOne,
    create,
    edit,
    destroy,
};