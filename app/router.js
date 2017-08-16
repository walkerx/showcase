'use strict';

module.exports = app => {
  app.get('/', 'home.index');
  app.resources('devices', '/api/devices', app.controller.devices);
};
