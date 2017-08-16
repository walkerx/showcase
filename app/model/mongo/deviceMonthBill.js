'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const DeviceMonthBillSchema = new mongoose.Schema({
        business_owner:{
            name: String,
            user_id: String
        },
        city: Number,
        client_id: String,
        ctime: {type: Date, default: Date.now},
        date: {type: Date, default: Date.now},
        ele_fee: Number,
        fee: {
            // xx:{count: {xx: Number}, price: {xx: Number}, }
        },
        id: String,
        mtime: {type: Date, default: Date.now},
        periods: Number,
        removed: Number,
        status: Number
    }, {collection: 'device_month_bill'});

    return mongoose.model('DeviceMonthBill', DeviceMonthBillSchema);
};