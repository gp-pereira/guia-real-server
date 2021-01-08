async function create (req, res) {
    return await global.db.create('partner', req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    return await global.db.findAll('partner')
        .then(partners => res.status(200).send(partners)) 
        .catch(err => res.sendStatus(500)); 
}

async function getAllByCity (req, res) {
    return await global.db.findAll('partner', { CityId: req.query.id })
        .then(partners => res.status(200).send(partners)) 
        .catch(err => {console.log(err); res.sendStatus(500)}); 
}

async function getOne (req, res) {
    return global.db.findOne('partner', { id: req.body.id })
        .then(example => res.status(200).send(example)) 
        .catch(err => res.sendStatus(500)); 
}

async function edit (req, res) {
    return await global.db.update('partner', { id: req.body.id }, req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500).send());
}

async function destroy (req, res) {
    return await global.db.destroy('partner', req.body.id)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500));
}
                    
module.exports = {
    getAll,
    getAllByCity,
    getOne,
    create,
    edit,
    destroy,
};