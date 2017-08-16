'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const TicketSchema = new mongoose.Schema({
        check_time: Number,
        confirm: {
            date: Number,
            name: String,
            note: String,
            phone: String,
            time: String
        },
        create_user: String,
        ctime: {type: Date, default: Date.now},
        default_target: Number,
        device_sn: String,
        dispatch_info: {
            appoint_time: String,
            fall_stage_1: String,
            fall_stage_2: String,
            other_notes: String,
            plan_time: String,
            suggest: String
        },
        evaluate: {
            dispatch: Number,
            fall_stage_1: String,
            fall_stage_2: String,
            manner: Number,
            overall: Number,
            profession: Number,
            suggest: String,
            time: Number
        },
        mtime: {type: Date, default: Date.now},
        operator_1: {
            op_id: String,
            op_name: String,
            op_phone: String
        },
        operator_2: {
            op_id: String,
            op_name: String,
            op_phone: String
        },
        operator_2_info: {
            fall_stage_1: String,
            fall_stage_2: String,
            solution: String,
            solution_select: String
        },
        priority: Number,
        public_auth: Boolean,
        relate_home: {
            block: String,
            city: String,
            client_id: String,
            home_alias: String,
            home_id: String,
            home_name: String,
            home_type: Number,
            location: String,
            province: String,
            region: Number
        },
        repair_rooms: {
            elemeter: [{type: String}],
            gateway: [{type: String}],
            lock: [{type: String}]
        },
        rooms: [{
            room_id: String,
            room_name: String
        }],
        service_target: Number,
        service_type: Number,
        submit_time: Number,
        subscribe: {
            date: Number,
            name: String,
            note: String,
            phone: String,
            time: String
        },
        ticke_state: Number,
        ticket_check_description: String,
        ticket_description: String,
        ticket_id: String,
        ticket_state: Number,
        ticket_status: Number
    }, {collection: 'tickets'});

    return mongoose.model('Ticket', TicketSchema);
};