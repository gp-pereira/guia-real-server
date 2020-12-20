module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Ad', {
        title: {
            type: Sequelize.STRING,
        },
        imgUrl: {
            type: Sequelize.STRING,
        }
    });
}