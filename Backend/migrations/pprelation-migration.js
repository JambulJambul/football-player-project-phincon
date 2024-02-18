"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "player_position_relation",
            {
                pp_id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                player_id: {
                    type: Sequelize.INTEGER
                },
                position_id: {
                    type: Sequelize.INTEGER
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
        await queryInterface.dropTable("player_position_relation");
    },
};
