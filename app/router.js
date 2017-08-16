'use strict';

module.exports = app => {
    require('./router/openApi')(app);
    // require('./router/admin')(app);
    app.get('/', 'home.index');
    // app.resources('devices', '/api/devices', app.controller.devices);
};
