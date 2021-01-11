async function send (req, res) {
    await global.db.create('message', req.body)
        .then(() => res.sendStatus(200))
        .catch(err => res.sendStatus(500));
}

async function getAllByCompany (req, res) {
    await global.db.findAll('message', { CompanyId: req.query.id })
        .then(messages => res.status(200).send(messages))
        .catch(err => res.sendStatus(500));
}

async function readAllByCompany (req, res) {
    try {
        const messages = await global.db.findAll('message', { CompanyId: req.body.id });

        for (let i=0; i<messages.length; i++) {
            messages[i].read = true;
            await messages[i].save();
        }

        return res.sendStatus(200);

    } catch { return res.sendStatus(500); }
}

module.exports = {
    send,
    getAllByCompany,
    readAllByCompany
}