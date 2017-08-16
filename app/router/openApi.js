'use strict';

module.exports = app => {
    app.get('/openapi/v1/', app.controller.openapi.v1.client.index);
    // app.get('/openapi/v1/detail', app.controller.news.detail);
};