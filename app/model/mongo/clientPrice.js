'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const ClientPriceSchema = new mongoose.Schema({
        business_owner: {
            name: String,
            user_id: String
        },
        by_city: Boolean,
        client_id: String,
        ctime: {type: Date, default: Date.now},
        mtime: {type: Date, default: Date.now},
        pay_periods: Number,
        price: {
            // XX: {device: String}
        },
        removed: Number,
        use_ele_charge: Boolean
    }, {collection: 'client_price'});

    return mongoose.model('ClientPrice', ClientPriceSchema);
};