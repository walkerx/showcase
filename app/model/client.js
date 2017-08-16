'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const ClientSchema = new mongoose.Schema({
        async_callback: String,
        bind_user: String,
        client_key: String,
        client_secret: String,
        company_city: String,
        company_name: String,
        company_num: String,
        ctime: {type: Date, default: Date.now},
        eleprice: Number,
        event_callback: String,
        from_3rd: Number,
        from_ticket: Number,
        id: String,
        mtime: {type: Date, default: Date.now},
        name: String,
        overdraft: Number,
        phonenumber: String,
        pooling_area: Number,
        pooling_state: Number,
        read_msg: Boolean,
        status: Number,
        ticket_onoff: Number
    }, {collection: 'clients'});

    return mongoose.model('Client', ClientSchema);
};