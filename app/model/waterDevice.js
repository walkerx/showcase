'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const WaterDeviceSchema = new mongoose.Schema({
        binding: Number,
        ctime: {type: Date, default: Date.now},
        description: String,
        gateway_uuid: String,
        home_id: String,
        manufactory: String,
        meter_type: Number,
        mtime: {type: Date, default: Date.now},
        onoff: Number,
        reading: Number,
        records: [{
            amount: Number,
            time: {type: Date, default: Date.now},
        }],
        removed: Number,
        room_id: String,
        type: String,
        uuid: String

    }, {collection: 'water_devices'});

    return mongoose.model('WaterDevice', WaterDeviceSchema);
};