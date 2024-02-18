"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "players",
            {
                player_id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                player_name: {
                    type: Sequelize.STRING
                },
                club_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'club',
                        key: 'club_id'
                    },
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
                is_deleted: {
                    type: Sequelize.BOOLEAN,
                    defaultValue: false
                },
                player_img_url: {
                    type: Sequelize.STRING
                },
                player_view_count: {
                    type: Sequelize.INTEGER,
                    defaultValue: 0
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
            }
        );
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("players");
    },
};
