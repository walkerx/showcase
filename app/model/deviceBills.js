'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const DeviceBillSchema = new mongoose.Schema({
        auto: Number,
        bill_time: {type: Date, default: Date.now},
        city: String,
        client_id: String,
        home_id: String,
        home_name: String,
        home_type: Number,
        installer: {
            name: String,
            role_id: String,
            user_id: String
        },
        location: String,
        manufactory: String,
        meter_type: Number,
        model: String,
        room_id: String,
        room_name: String,
        sn: String,
        type: String,
        user_id: String,
        zone: String

    }, {collection: 'device_bills'});

    return mongoose.model('DeviceBill', DeviceBillSchema);
};