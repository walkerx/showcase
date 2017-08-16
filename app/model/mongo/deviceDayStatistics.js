'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const DeviceDayStatisticSchema = new mongoose.Schema({
        day: {type: Date, default: Date.now},
        /**
         * xx: {xx:{xx:Number}}
         */
    }, {collection: 'device_day_statistics'});

    return mongoose.model('DeviceDayStatistic', DeviceDayStatisticSchema);
};