const Joi = require('joi');
const Boom = require('boom');

const playerDetailValidation = (data) => {
  const schema = Joi.object({
    player_id: Joi.number().required().description('Player id; i.e. 1'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const addPlayerValidation = (data) => {
  const schema = Joi.object({
    player_name: Joi.string().required().description('Player Name; i.e. Lionel Messi'),
    club_id: Joi.number().required().description('Club Id; i.e. 2'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const playerPositionValidation = (data) => {
  const schema = Joi.object({
    player_id: Joi.number().required().description('Player id; i.e. 1'),
    position_id: Joi.number().required().description('Club Id; i.e. 2'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const addClubValidation = (data) => {
  const schema = Joi.object({
    club_name: Joi.string().required().description('Club Name; i.e. Liverpool FC'),
    club_location: Joi.string().required().description('Club Location; i.e. Bandung'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const editPlayerBodyValidation = (data) => {
  const schema = Joi.object({
    player_name: Joi.string().optional().description('Player Name; i.e. Lionel Messi'),
    club_id: Joi.number().optional().description('Club Id; i.e. 2'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const userDetailValidation = (data) => {
  const schema = Joi.object({
    user_id: Joi.number().required().description('User id; i.e. 1'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const createUserValidation = (data) => {
  const schema = Joi.object({
    user_name: Joi.string().alphanum().min(3).max(30).required().description('User Name; i.e. John Doe'),
    user_email: Joi.string().email().required().description('User Email; i.e. johndoe@gmail.com'),
    user_password: Joi.string().min(6).required().description('User Password; i.e. AasfIH124F'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const loginValidation = (data) => {
  const schema = Joi.object({
    user_email: Joi.string().email().required().description('User Email; i.e. johndoe@gmail.com'),
    user_password: Joi.string().required().description('User Password; i.e. AasfIH124F'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const updateUserNameValidation = (data) => {
  const schema = Joi.object({
    user_name: Joi.string().required().description('User Name; i.e. John Doe'),
    verifiedUser: Joi.object().required().description('JWT Token')
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const changePasswordValidation = (data) => {
  const schema = Joi.object({
    user_password: Joi.string().min(6).required().description('User Password; i.e. AasfIH124F'),
    verifiedUser: Joi.object().required().description('JWT Token')
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const generateOtpValidation = (data) => {
  const schema = Joi.object({
    user_email: Joi.string().email().required().description('User Email; i.e. testjohn@email.com'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

const forgotPasswordValidation = (data) => {
  const schema = Joi.object({
    user_password: Joi.string().min(6).required().description('User Password; i.e. AasfIH124F'),
    user_email: Joi.string().email().required().description('User Email; i.e. testjohn@email.com'),
    otp_code: Joi.number().required().description('OTP Code; i.e. 124124'),
  });

  if (schema.validate(data).error) {
    throw Boom.badRequest(schema.validate(data).error);
  }
};

module.exports = {
  playerDetailValidation,
  addPlayerValidation,
  playerPositionValidation,
  addClubValidation,
  editPlayerBodyValidation,
  userDetailValidation,
  createUserValidation,
  loginValidation,
  updateUserNameValidation,
  changePasswordValidation,
  generateOtpValidation,
  forgotPasswordValidation
};
