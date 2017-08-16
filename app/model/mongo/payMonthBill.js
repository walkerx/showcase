'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const PayMonthBillSchema = new mongoose.Schema({
        business_owner: {
            name: String,
            user_id: String
        },
        city: String,
        client_id: String,
        ctime: {type: Date, default: Date.now},
        device_month_bill_id: String,
        ele_fee: Number,
        fee: Number,
        id: String,
        last_date: {type: Date, default: Date.now},
        month: {type: Date, default: Date.now},
        mtime: {type: Date, default: Date.now},
        pay_date: {type: Date, default: Date.now},
        pay_orders:[],
        removed: Number,
        status: Number,
        transfer_fee: Number

    }, {collection: 'pay_month_bill'});

    return mongoose.model('PayMonthBill', PayMonthBillSchema);
};