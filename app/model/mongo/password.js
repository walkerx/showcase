'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const PasswordSchema = new mongoose.Schema({
        frozen: Number,
        id: Number,
        password: String,
        send_to: String,
        time: {type: Date, default: Date.now},
        uuid: String
    }, {collection: 'password'});

    return mongoose.model('Password', PasswordSchema);
};