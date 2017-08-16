'use strict';

module.exports = app => {
    class ClientController extends app.Controller {
        * index() {
            this.ctx.body = yield this.app.mongo.Client.find({});
        }
    }
    return ClientController;
};
