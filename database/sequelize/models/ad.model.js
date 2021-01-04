module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Ad', {
        title: {
            type: Sequelize.STRING,
        },
        imgPath: {
            type: Sequelize.STRING,
        },
        imgMimetype: {
            type: Sequelize.STRING
        }
    });
}