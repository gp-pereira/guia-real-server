module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Live', {
        link: {
            type: Sequelize.STRING,
        },
    });
}