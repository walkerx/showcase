'use strict';
//商户信息
module.exports = app => {
    const mongoose = app.mongoose;
    const ClientSchema = new mongoose.Schema({
        id: String,
        name: String,
        client_key: String,
        client_secret: String,
        bind_user: String,
        event_callback: String,
        async_callback: String,
        status: Number,
        phonenumber: String,
        ctime: {type: Date, default: Date.now},
        mtime: {type: Date, default: Date.now},
        read_msg: Boolean,
        ticket_onoff: String,
        eleprice: Number,
        pooling_state: Number,
        pooling_area: Number,
        company_name: String,
        company_city: String,
        company_num: String,
        overdraft: Number
    }, {collection: 'clients'});

    return mongoose.model('Client', ClientSchema);
};