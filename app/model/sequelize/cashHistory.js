'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, NOW } = app.Sequelize;
    const CashHistory = app.model.define('CashHistory', {
        id: {
            type: STRING(20),
            primaryKey: true
        },
        date: {
            type: DATE,
            defaultValue: NOW
        },
        status: {
            type: INTEGER,
            defaultValue: 1
        },
        amount: INTEGER,
        account_bank: STRING,
        account_name: STRING,
        account_card: STRING
    }, {
        underscored: true,
        freezeTableName: false,
        tableName: 'cash_history',
        // classMethods: {
        //     associate: function(models) {
        //         CashHistory.belongsTo(app.model.ClientAccount, {
        //             foreignKey: {
        //                 allowNull: false,
        //                 name: 'client_id'
        //             }
        //         });
        //     }
        // }
    });
    return CashHistory;
};