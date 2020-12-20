module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Company', {
        fantasyName: {
            type: Sequelize.STRING,
        },
        corporateName: {
            type: Sequelize.STRING,
        },
        docNumber: {
            type: Sequelize.STRING,
        },
        address: {
            type: Sequelize.STRING,
        },
        addressComplement: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        phoneNumber: {
            type: Sequelize.STRING,
        },
        whatsapp: {
            type: Sequelize.STRING,
        }
    });
}