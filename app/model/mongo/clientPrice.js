'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const ClientPriceSchema = new mongoose.Schema({
        uuid: String,
        by_city: Boolean,

    }, {collection: 'client_price'});

    return mongoose.model('ClientPrice', ClientPriceSchema);
};