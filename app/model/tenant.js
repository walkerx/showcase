'use strict';
//租客集合
module.exports = app => {
    const mongoose = app.mongoose;
    const TenantSchema = new mongoose.Schema({
        bind_password_ids: {
            in: {
                id: Number,
                uuid: String
            },
            out: {
                id: Number,
                uuid: String
            }
        },
        ctime: Number,
        elemeter_info: {
            cur_elec: Number,
            cur_elec_time: Number,
            home_elemeter_amount: Number,
            home_elemeter_amount_time: Number,
            home_elemeter_photo: ,
            init_elec: Number,
            init_elec_time: Number,
            overdraft_elec: Number,
            overdraft_elec_time: Number,
            total_elec: Number,
            total_elec_time: Number
        },
        home_id: String,
        lease_term: {
            end: Number,
            start: Number
        },
        room_id: String,
        status: Number,
        tenant: {
            id: String,
            name: String,
            note: String,
            phone: String
        }
    }, {collection: 'tenant'});

    return mongoose.model('Tenant', TenantSchema);
};