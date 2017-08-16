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
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'test',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
    };

    return config;
};
