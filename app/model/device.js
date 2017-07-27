'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const DeviceSchema = new mongoose.Schema({
        uuid: { type: String  },
        location: { type: String  }
    });

    return mongoose.model('Device', DeviceSchema);
};