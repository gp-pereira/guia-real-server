module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Partner', {
        fantasyName: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        addressComplement: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
    });
}