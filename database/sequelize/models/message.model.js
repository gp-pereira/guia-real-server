module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Message', {
        content: {
            type: Sequelize.STRING(2048),
        },
        read: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        }
    });
}