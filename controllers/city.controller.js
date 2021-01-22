const { TestScheduler } = require("jest");

async function create (req, res) {
    return await global.db.create('city', req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500))
}

async function getAll (req, res) {
    return await global.db.findAll('city')
        .then(cities => res.status(200).send(cities)) 
        .catch(err => res.sendStatus(500)); 
}

async function getOne (req, res) {
    return global.db.findOne('city', { id: req.query.id })
        .then(example => res.status(200).send(example)) 
        .catch(err => res.sendStatus(500)); 
}

async function edit (req, res) {
    return await global.db.update('city', { id: req.body.id }, req.body)
        .then(() => res.sendStatus(200)) 
        .catch(err => res.status(500).send());
}

async function destroy (req, res) {
    try {
        const city = await global.db.findOne('city', { id: req.body.id });

        const companies = await city.getCompanies();
        const partners = await city.getPartners();

        if (companies.length > 0 || partners.length > 0) 
            return res.status(409).send({ companies, partners });

        await city.destroy();

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