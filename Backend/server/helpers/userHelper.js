const db = require('../../models/index')
const _ = require('lodash');
const bcrypt = require('bcrypt')
const CheckerUtil = require('../utils/checkerUtil')
const authMiddleware = require('../middlewares/authMiddleware')
const Boom = require ('boom');


const getAllUsers = async () => {
    try {
        const users = await db.Users.findAll({
            attributes: { exclude: ['user_password', 'createdAt', 'updatedAt', 'deletedAt', 'otp_code', 'otp_exp'] }
        });
        if (_.isEmpty(users)) {
            const message = "No user found in the database.";
            res = { message };
            return Promise.resolve(res);
        }
        const message = "Get all user successful.";
        const res = { message, users }
        return Promise.resolve(res);
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch users. Check the server logs for details.");
    }
}

const getUserDetails = async (dataObject) => {
    const { user_id } = dataObject;
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        const users = await db.Users.findOne({
            where: {
                user_id: user_id,
            },
            attributes: { exclude: ['user_password', 'createdAt', 'updatedAt', 'deletedAt', 'otp_code', 'otp_exp'] }
        })
        if (_.isEmpty(users)) {
            const message = "No user found in the database.";
            res = { message };
            return Promise.resolve(res);
        }
        const message = "Get user details successful.";
        const res = { message, users }
        return Promise.resolve(res);
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch user details. Check the server logs for details.");
    }
}

const createUser = async (dataObject) => {
    const { user_name, user_email, user_password } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeletedByEmail({ user_email })
        if (isDeleted == false) {
            const message = 'Email already exist in the database'
            return Promise.reject(Boom.badRequest(message));
        }
        const hashedPassword = await bcrypt.hash(user_password, 10)
        const isAdded = await db.Users.create({ user_name: user_name, user_email: user_email, user_password: hashedPassword })
        if (isAdded == false) {
            const message = 'Operation was unsucessful'
            return Promise.reject(Boom.badRequest(message));
        }
        const message = `The user ${user_name} has been added to the database.`
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const deleteUser = async (dataObject) => {
    const { user_id } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id });
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        const isSuccess = await db.Users.destroy({
            where: {
                user_id: user_id
            }
        })
        if (isSuccess == false) {
            const message = 'Operation was unsucessful'
            const res = { message }
            return Promise.resolve(res)
        }
        const message = `The user with id = ${user_id} has been deleted from the database.`
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const restoreUser = async (dataObject) => {
    const { user_id } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id });
        if (isDeleted == false) {
            const message = 'User still exist in database'
            const res = { message }
            return Promise.resolve(res)
        }
        const isSuccess = await db.Users.restore({
            where: {
                user_id: user_id
            }
        })
        if (isSuccess == false) {
            const message = 'Operation was unsucessful'
            const res = { message }
            return Promise.resolve(res)
        }
        const message = `The user with id = ${user_id} has been restored to the database.`
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const login = async (dataObject) => {
    const { user_email, user_password } = dataObject;
    try {
        const users = await db.Users.findOne({
            where: {
                user_email: user_email,
            },
            attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt', 'otp_code', 'otp_exp'] }
        })
        if (_.isEmpty(users)) {
            const message = "User not found";
            return Promise.reject(Boom.badRequest(message));
        }
        const passwordCheck = await bcrypt.compare(user_password, users.user_password);
        if (passwordCheck == false) {
            const message = "Incorrect password";
            return Promise.reject(Boom.badRequest(message));
        }
        const token = authMiddleware.generateToken({
            user_id: users.user_id,
            user_name: users.user_name,
            user_role: users.user_role
        });
        const message = "Login successful.";
        const res = { message, token }
        return Promise.resolve(res);
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch user details. Check the server logs for details.");
    }
}

const getPersonalProfile = async (dataObject) => {
    const { user_id } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        const users = await db.Users.findOne({
            where: {
                user_id: user_id,
            },
            attributes: { exclude: ['user_password', 'createdAt', 'updatedAt', 'deletedAt', 'otp_code', 'otp_exp'] }
        })
        if (_.isEmpty(users)) {
            const message = "No user found in the database.";
            res = { message };
            return Promise.resolve(res);
        }
        const message = "Success to get personal profile";
        const res = { message, users }
        return Promise.resolve(res);
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch user details. Check the server logs for details.");
    }
}

const updateProfile = async (dataObject) => {
    const { user_name, verifiedUser } = dataObject
    const { user_id } = verifiedUser
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        await db.Users.update({
            user_name: user_name
        }, {
            where: {
                user_id: user_id,
            },
        })
        const message = "User has been updated."
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const changePassword = async (dataObject) => {
    const { user_password, verifiedUser } = dataObject
    const { user_id } = verifiedUser
    try {
        const isDeleted = await CheckerUtil.isUserDeleted({ user_id })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        const hashedPassword = await bcrypt.hash(user_password, 10)
        await db.Users.update({
            user_password: hashedPassword
        }, {
            where: {
                user_id: user_id,
            },
        })
        const message = "Password has been updated."
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const generateOtp = async (dataObject) => {
    const { user_email } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeletedByEmail({ user_email })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        function generateRandomSixDigitNumber() {
            const min = 100000;
            const max = 999999;
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const otpCode = generateRandomSixDigitNumber()
        const otpExp = new Date(Date.now() + (5 * 60 * 1000));
        await db.Users.update({
            otp_code: otpCode,
            otp_exp: otpExp
        }, {
            where: {
                user_email: user_email,
            },
        })
        const message = `Your OTP Code is ${otpCode}`
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

const forgotPassword = async (dataObject) => {
    const { user_password, user_email, otp_code } = dataObject
    try {
        const isDeleted = await CheckerUtil.isUserDeletedByEmail({ user_email })
        if (isDeleted == true) {
            const message = 'User doesn\'t exist in the database'
            const res = { message }
            return Promise.resolve(res)
        }
        const users = await db.Users.findOne({
            where: {
                user_email: user_email,
            },
            attributes: { exclude: ['user_password', 'createdAt', 'updatedAt', 'deletedAt', 'user_name', 'user_email'] }
        })
        if (_.isEmpty(users)) {
            const message = "No user found in the database.";
            res = { message };
            return Promise.resolve(res);
        }
        if (otp_code != users.otp_code) {
            const message = "Incorrect OTP"
            const res = { message }
            return Promise.resolve(res)
        }
        const isOtpExpired = new Date(users.otp_exp).getTime() < Date.now();
        if (isOtpExpired == true) {
            const message = "OTP is expired"
            const res = { message }
            return Promise.resolve(res)
        }
        const hashedPassword = await bcrypt.hash(user_password, 10)
        await db.Users.update({
            user_password: hashedPassword
        }, {
            where: {
                user_email: user_email,
            },
        })
        const message = "Password has been updated."
        const res = { message }
        return Promise.resolve(res)
    } catch (error) {
        console.log(error)
        throw new error
    }
}

module.exports = {
    getAllUsers,
    getUserDetails,
    createUser,
    deleteUser,
    restoreUser,
    login,
    getPersonalProfile,
    updateProfile,
    changePassword,
    generateOtp,
    forgotPassword
}