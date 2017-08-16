'use strict';

module.exports = appInfo => {
    const config = {};

    config.keys = appInfo.name + '_1501125993284_294';

    config.redis = {
        clients: {
            first: {
                port: 6379,
                host: '127.0.0.1',
                password: '',
                db: 0,
            },
        }
    };

    config.mongoose = {
        url: 'mongodb://127.0.0.1/showcase',
        options: {
            poolSize: 10
        }
    };

    config.sequelize = {
        dialect: 'mysql',
        database: 'saas',
        host: '118.190.9.82',
        port: '3306',
        username: 'root',
        password: '12345dingdingpage',
    };

    return config;
};
