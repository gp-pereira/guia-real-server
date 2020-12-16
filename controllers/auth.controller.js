require('dotenv/config');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login (req, res) {
    const user = await global.db.findOne('user', { name: req.body.name });

    if (!user) return res.sendStatus(404);

    if (!bcrypt.compareSync(
        req.body.password, 
        user.getDataValue('password')
    )) return res.sendStatus(401);

    return res.status(200).send({
        name: user.name, 
        jwt: jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY )
    });
}

async function isLogged (req, res, next) {
    try {
        jwt.verify(req.headers.auth, process.env.JWT_PRIVATE_KEY);
        next();

    } catch { return res.sendStatus(401); }
}

async function isAdmin (req, res) {

}

module.exports = { login, isLogged, isAdmin };