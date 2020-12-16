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

// try catch blocks are used because for some 
// reason invalid jsonwebtokens throw an error

async function isLogged (req, res, next) {
    try {
        jwt.verify(req.headers.auth, process.env.JWT_PRIVATE_KEY);
        next();

    } catch { return res.sendStatus(401); }
}

async function isAdmin (req, res, next) {
    try {
        const token = jwt.verify(req.headers.auth, process.env.JWT_PRIVATE_KEY);
        const user = await global.db.findOne('user', { id: token.id });

        console.log(user);

        if (user.role !== 'admin') return res.sendStatus(403);

        next();

    } catch { return res.sendStatus(401); }
}

module.exports = { login, isLogged, isAdmin };