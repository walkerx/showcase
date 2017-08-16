'use strict';

module.exports = app => {
    class DeviceController extends app.Controller {
        * index() {
            this.ctx.body = yield this.ctx.model.User.find({});
        }
    }
    return DeviceController;
};
