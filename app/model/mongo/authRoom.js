'use strict';
//蓝牙授权 openApi
module.exports = app => {
    const mongoose = app.mongoose;
    const AuthRoomSchema = new mongoose.Schema({
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
            phone: String
        },
        phone: String
    }, {collection: 'auth_rooms'});

    return mongoose.model('AuthRoom', AuthRoomSchema);
};