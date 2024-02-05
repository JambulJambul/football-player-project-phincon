const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
    }
    Users.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: DataTypes.STRING,
        user_email: DataTypes.STRING,
        user_password: DataTypes.STRING,
        user_role: DataTypes.STRING,
        otp_code: DataTypes.CHAR(6),
        otp_exp: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Users',
        paranoid: true,
    });
    return Users;
};