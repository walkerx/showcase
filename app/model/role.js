'use strict';
//用户集合
module.exports = app => {
    const mongoose = app.mongoose;
    const UserSchema = new mongoose.Schema({
        uuid: String,
        location: String,
        apartment_name: String,
        app_id: String,
        city: String,
        company_name: String,
        ctime: {type: Date, default: Date.now},
        head: String,
        is_agent: String,
        is_sign: String,
        mtime: {type: Date, default: Date.now},
        operator: {
            id: String,
            name: String,
            phone: Stringser
        },
        phone: String
    }, {collection: 'roles'});

    return mongoose.model('User', UserSchema);
};