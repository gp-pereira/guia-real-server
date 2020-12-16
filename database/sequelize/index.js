require('dotenv/config');

// searchObj = { prop: value }

const Sequelize = require('sequelize');

class DatabaseInterface {
    constructor () {
        this.sequelize = new Sequelize(
            process.env.DB_NAME,
            process.env.DB_USER,
            process.env.DB_PASSWORD,
            {
                host: process.env.DB_HOST,
                dialect: 'mysql',
                logging: false, 
            }
        );

        this.models = {
            'user': require('./models/user.model')(this.sequelize, Sequelize),
            'example': require('./models/example.model')(this.sequelize, Sequelize)
        }

        // this.sync();
    }

    async sync () {
        return await this.sequelize.sync({ alter: true });
    }

    async close () {
        await this.sequelize.close();
    }

    async create (model, props) {
        await this.models[model].create(props);
    } 

    async findOne (model, searchObj) {
        return await this.models[model].findOne({ where: searchObj });
    }

    async findAll (model, searchObj={}) {
        return await this.models[model].findAll({ where: searchObj });
    }

    async update (model, searchObj, props) {
        const prevProps = await this.findOne(model, searchObj);
        
        for (var prop in props) prevProps[prop] = props[prop];

        await prevProps.save();
    }

    async destroy (model, searchObj) {
        const props = await this.findOne(model, searchObj);

        await props.destroy();
    }
}

module.exports = new DatabaseInterface;

