async function send (req, res) {
    await global.db.create('message', req.body)
        .then(() => res.sendStatus(200))
        .catch(err => console.log(err));
}

module.exports = {
    send
}