'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const AuthRoomSchema = new mongoose.Schema({
        auth_id: String,
        auth_type: Number,
        client_id: String,
        ctime: {type: Date, default: Date.now},
        home_id: String,
        mtime: {type: Date, default: Date.now},
        permission: {
            begin: Number,
            end: Number,
            status: Number
        },
        room_id: String,
        userid: String
    }, {collection: 'auth_rooms'});

    return mongoose.model('AuthRoom', AuthRoomSchema);
};