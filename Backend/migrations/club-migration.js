"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable(
            "club",
            {
                club_id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                club_name: {
                    type: Sequelize.STRING
                },
                club_location: {
                    type: Sequelize.STRING
                },
                club_img_url: {
                    type: Sequelize.STRING
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
        await queryInterface.dropTable("club");
    },
};
