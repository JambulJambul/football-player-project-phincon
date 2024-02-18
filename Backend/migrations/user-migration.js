"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "users",
            {
                user_id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                user_name: {
                    type: Sequelize.STRING
                },
                user_email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
                user_password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                user_role: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                otp_code: {
                    type: Sequelize.CHAR(6)
                },
                otp_exp: {
                    type: Sequelize.DATE
                },
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                },
                deletedAt: {
                    type: Sequelize.DATE
                }
            },
            {
                paranoid: true,
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("users");
    },
};
