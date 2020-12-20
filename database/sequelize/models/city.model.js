module.exports = (sequelize, Sequelize) => {
    return sequelize.define('City', {
        name: {
            type: Sequelize.STRING,
            unique: true,
        },
    });
}