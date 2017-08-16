'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const OrderSchema = new mongoose.Schema({
        client_id: String,
        ctime: {type: Date, default: Date.now},
        demander: {
            expect_date: Number,
            expect_time: Number,
            name: String,
            note: String,
            phone: String
        },
        description: String,
        home_alias: String,
        home_id: String,
        installer: {
            confirm_date: Number,
            confirm_time: Number,
            name: String,
            note: String,
            phone: String
        },
        mtime: {type: Date, default: Date.now},
        stage: Number,
        ticket_id: String,
        user_id: String
    }, {collection: 'orders'});

    return mongoose.model('Order', OrderSchema);
};