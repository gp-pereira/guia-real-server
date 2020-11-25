module.exports = firebase => {
    async function getAllUsers (req, res) {
        return await firebase.auth().listUsers()
            .then(users => res.status(200).send({ users })) 
            .catch(err => res.sendStatus(500)); 
    }

    async function getOneUser (req, res) {
        return await firebase.auth().getUser(req.body.uid)
            .then(user => res.status(200).send({ user })) 
            .catch(err => res.sendStatus(500)); 
    }

    async function createUser (req, res) {
        return await firebase.auth().createUser({
            email: req.body.email,
            password: req.body.password
        })
            .then(() => res.sendStatus(200)) 
            .catch(err => res.status(400).send({ message: err.errorInfo.code })); 
    }

    async function editUser (req, res) {
        return await firebase.auth().updateUser(req.body.uid, {
            email: req.body.email,
            password: req.body.password
        })
            .then(() => res.sendStatus(200)) 
            .catch(err => res.status(400).send({ message: err.errorInfo.code })); 
    }
    
    async function deleteUser (req, res) {
        return await firebase.auth().deleteUser(req.body.uid)
            .then(() => res.sendStatus(200)) 
            .catch(err => res.status(400).send({ message: err.errorInfo.code })); 
    }

    return {
        getAllUsers,
        getOneUser,
        createUser,
        editUser,
        deleteUser,
    };
}