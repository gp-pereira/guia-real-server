module.exports = (sequelize, Sequelize) => {
    return sequelize.define('User', {
        name: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING,
            get () { return undefined }
        },
        role: {
            type: Sequelize.ENUM,
            values: ['admin', 'user'],
            defaultValue: 'user',
        }
    });
}