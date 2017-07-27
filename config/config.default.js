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
        options: {}
    };

    return config;
};
