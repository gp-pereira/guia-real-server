// Refer to this page from Sequelize docs for model creation
// https://sequelize.org/master/manual/model-basics.html

module.exports = (sequelize, Sequelize) => {
    return sequelize.define('Example', {
        columnOne: {
            type: Sequelize.STRING,
            unique: 'example string'
        },
        columnTwo: {
            type: Sequelize.INTEGER,
            defaultValue: 1
        }
    });
}