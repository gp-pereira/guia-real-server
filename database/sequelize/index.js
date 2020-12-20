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
            'ad': require('./models/ad.model')(this.sequelize, Sequelize),
            'city': require('./models/city.model')(this.sequelize, Sequelize),
            'live': require('./models/live.model')(this.sequelize, Sequelize),
            'user': require('./models/user.model')(this.sequelize, Sequelize),
            'news': require('./models/news.model')(this.sequelize, Sequelize),
            'company': require('./models/company.model')(this.sequelize, Sequelize),
            'message': require('./models/message.model')(this.sequelize, Sequelize),
            'partner': require('./models/partner.model')(this.sequelize, Sequelize),
        };

        this.init();
    }

    async init () {
        this.models.city.hasMany(this.models.company);
        this.models.company.belongsTo(this.models.city);

        this.models.city.hasMany(this.models.partner);
        this.models.partner.belongsTo(this.models.city);

        this.models.company.hasMany(this.models.user);
        this.models.user.belongsTo(this.models.company);

        this.models.company.hasMany(this.models.message);
        this.models.message.belongsTo(this.models.company);

        // uncomment the next line to sync the db
        // await this.sequelize.sync({ alter: true }); console.log('Sync done.');
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

