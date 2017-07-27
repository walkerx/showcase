'use strict';

module.exports = app => {
    class DeviceController extends app.Controller {
        * index() {
            this.ctx.body = 'hi, egg. shit';
        }
    }
    return DeviceController;
};
