module.exports = (sequelize, Sequelize) => {
    return sequelize.define('News', {
        title: {
            type: Sequelize.STRING,
        },
        content: {
            type: Sequelize.STRING(4096),
        },
        imgPath: {
            type: Sequelize.STRING,
        },
        imgMimetype: {
            type: Sequelize.STRING
        }
    });
}