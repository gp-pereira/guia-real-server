module.exports = (sequelize, Sequelize) => {
    return sequelize.define('News', {
        title: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.STRING(1024),
        },
    });
}