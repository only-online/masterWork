const Sequelize = require('sequelize');
const settings = require('../config-data/config');
const connection = new Sequelize(settings.connectArray.dialect+'://'+settings.connectArray.user_name+':'+settings.connectArray.password+'@'+settings.connectArray.host+'/'+settings.connectArray.database);

const modelNames = ['Comments', 'Galery', 'Main', 'Main_seq', 'Menu', 'News', 'Role', 'Slide_show', 'Sub_menu', 'Teachers', 'University_info', 'Users', 'Img'];

for (const modelName of modelNames) {
    connection.import(`./models/${modelName}.js`);
}

for (const modelName of Object.keys(connection.models)) {
    if ('associate' in connection.models[modelName]) {
        connection.models[modelName].associate(connection.models);
    }
}

module.exports = connection;