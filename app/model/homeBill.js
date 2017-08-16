'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const HomeBillSchema = new mongoose.Schema({
        bill_time: {type: Date, default: Date.now},
        block: String,
        city: String,
        client_id: String,
        gateway_arr: [{
            sn: String,
            uuid: String
        }],
        gateway_cnt: Number,
        home_alias: String,
        home_id: String,
        home_name: String,
        home_type: Number,
        in_arr:[{
            sn: String,
            uuid: String
        }],
        in_cnt: Number,
        installer: {
            name: String,
            role_id: String,
            user_id: String
        },
        location: String,
        order_time: Number,
        out_arr: [{
            sn: String,
            uuid: String
        }],
        out_cnt: Number,
        room_cnt: Number,
        user_id: String,
        zone: String
    }, {collection: 'home_bills'});

    return mongoose.model('HomeBill', HomeBillSchema);
};