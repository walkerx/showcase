'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const HomeSchema = new mongoose.Schema({
        block: String,
        city: String,
        client_id: String,
        country: String,
        ctime: {type: Date, default: Date.now},
        current_group_id: Number,
        decorate_password: {
            password: String,
            permission_begin: Number,
            permission_end: Number
        },
        description: String,
        device:{
            //1: {onoff:Number}
            //2: {onoff:Number}
        },
        device_setting: {
            mtime: {type: Date, default: Date.now},
            overdraft: Number,
            pooling_area: Number,
            pooling_state: Number
        },
        devices: [{
            amount: Number,
            bind_type: Number,
            center_uuid: String,
            current_group_id: Number,
            description: String,
            elecollector_uuid: String,
            except_cnt: Number,
            group_id: Number,
            model: String,
            onoff: Number,
            password_op: {
                res: Number
            },
            passwords: [{
                frozen: Number,
                id: Number,
                password: String,
                send_to: String,
                tenant_id: String
            }],
            power: Number,
            process_id: String,
            room_id: String,
            sn: String,
            type: String,
            uuid: String,
        }],
        exception_count: Number,
        home_alias: String,
        home_id: String,
        home_name: String,
        house_location: String,
        install_state: Number,
        installer: {
            confirm_date: Number,
            confirm_time: Number,
            name: String,
            note: String,
            phone: String
        },
        location: String,
        manager: [{type:String}],
        mtime: {type: Date, default: Date.now},
        op_id: String,
        order_time: {type: Date, default: Date.now},
        pre_bind_devices: [{
            description: String,
            parent: String,
            room_id: String,
            sn: String,
            status: Number,
            type: String
        }],
        province: String,
        region: Number,
        rome_name: String,
        room_alias: String,
        rooms: [{
            description: String,
            install_state: Number,
            room_alias: String,
            room_id: String,
            room_name: String,
            sp_state: Number
        }],
        rtime: {type: Date, default: Date.now},
        sp_state: Number,
        stage: Number,
        user_id: String,
        with_water: Number,
        zone: String
    }, {collection: 'homes'});

    return mongoose.model('Home', HomeSchema);
};