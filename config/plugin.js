'use strict';

// had enabled by egg
// exports.static = true;
exports.redis = {
    enable: true,
    package: 'egg-redis',
};

exports.mongoose = {
    enable: true,
    package: 'egg-mongoose',
};

exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.sequelize = {
    enable: false,
    package: 'egg-sequelize'
};