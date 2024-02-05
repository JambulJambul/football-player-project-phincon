const Router = require('express').Router();

const Validation = require('../helpers/validationHelper');
const UserHelper = require('../helpers/userHelper');
const GeneralHelper = require('../helpers/generalHelper');
const authMiddleware = require('../middlewares/authMiddleware')

const fileName = 'server/api/userapi.js';

const getAllUsers = async (_request, reply) => {
    try {
        const response = await UserHelper.getAllUsers();
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const getUserDetails = async (request, reply) => {
    try {
        Validation.userDetailValidation(request.params);
        const { user_id } = request.params;
        const response = await UserHelper.getUserDetails({ user_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const createUser = async (request, reply) => {
    try {
        Validation.createUserValidation(request.body);
        const { user_name, user_email, user_password } = request.body;
        const response = await UserHelper.createUser({ user_name, user_email, user_password });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const deleteUser = async (request, reply) => {
    try {
        Validation.userDetailValidation(request.params);
        const { user_id } = request.params;
        const response = await UserHelper.deleteUser({ user_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const restoreUser = async (request, reply) => {
    try {
        Validation.userDetailValidation(request.params);
        const { user_id } = request.params;
        const response = await UserHelper.restoreUser({ user_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const login = async (request, reply) => {
    try {
        Validation.loginValidation(request.body);
        const { user_email, user_password } = request.body;
        const response = await UserHelper.login({ user_email, user_password });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const getPersonalProfile = async (request, reply) => {
    try {
        const { user_id } = request.body.verifiedUser;
        const response = await UserHelper.getPersonalProfile({ user_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const updateProfile = async (request, reply) => {
    try {
        Validation.updateUserNameValidation(request.body);
        const { user_name, verifiedUser } = request.body;
        const response = await UserHelper.updateProfile({ user_name, verifiedUser });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const changePassword = async (request, reply) => {
    try {
        Validation.changePasswordValidation(request.body);
        const { user_password, verifiedUser } = request.body;
        const response = await UserHelper.changePassword({ user_password, verifiedUser });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const generateOtp = async (request, reply) => {
    try {
        Validation.generateOtpValidation(request.body);
        const { user_email } = request.body;
        const response = await UserHelper.generateOtp({ user_email });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const forgotPassword = async (request, reply) => {
    try {
        Validation.forgotPasswordValidation(request.body);
        const { user_password, user_email, otp_code } = request.body;
        const response = await UserHelper.forgotPassword({ user_email, user_password, otp_code });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

Router.get('/', getAllUsers);
Router.get('/details/:user_id', getUserDetails);
Router.get('/personal-profile', authMiddleware.validateToken, getPersonalProfile)
Router.post('/create-user', createUser);
Router.post('/restore/:user_id', restoreUser);
Router.post('/login', login);
Router.post('/get-otp', generateOtp);
Router.post('/forgot-password', forgotPassword);
Router.patch('/update-profile', authMiddleware.validateToken, updateProfile)
Router.patch('/change-password', authMiddleware.validateToken, changePassword)
Router.delete('/delete/:user_id', deleteUser);

module.exports = Router;
