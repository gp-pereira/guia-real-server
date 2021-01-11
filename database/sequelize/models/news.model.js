module.exports = (sequelize, Sequelize) => {
    return sequelize.define('News', {
        title: {
            type: Sequelize.STRING,
        },
        subtitle: {
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
        },
        imgDescription: {
            type: Sequelize.STRING,
        },
        author: {
            type: Sequelize.STRING,
        },
    });
}