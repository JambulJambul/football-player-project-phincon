"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "positions",
            {
                position_id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                position_name: {
                    type: Sequelize.STRING
                },
                createdAt: {
                    type: Sequelize.DATE
                },
                updatedAt: {
                    type: Sequelize.DATE
                }
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("positions");
    },
};
