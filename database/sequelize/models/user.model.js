module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
            get() { return undefined }
        },
        // role: {
        //     type: Sequelize.ENUM,
        //     values: ['admin', 'owner', 'operator']
        // }
    });

    return User
}