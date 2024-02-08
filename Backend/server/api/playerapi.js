const Router = require('express').Router();

const Validation = require('../helpers/validationHelper');
const PlayerHelper = require('../helpers/playerHelper');
const GeneralHelper = require('../helpers/generalHelper');

const fileName = 'server/api/playerapi.js';

const list = async (_request, reply) => {
    try {
        const response = await PlayerHelper.getAllPlayers();
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const getPlayerDetail = async (request, reply) => {
    try {
        Validation.playerDetailValidation(request.params);
        const { player_id } = request.params;
        const response = await PlayerHelper.getPlayerDetails({ player_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const addNewPlayer = async (request, reply) => {
    try {
        console.log(request.body,"HEREE")
        Validation.addPlayerValidation(request.body);
        const { player_name, club_id, player_img_url } = request.body;
        const response = await PlayerHelper.addNewPlayer({ player_name, club_id, player_img_url });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const addPlayerPosition = async (request, reply) => {
    try {
        Validation.playerPositionValidation(request.body);
        const { player_id, position_id } = request.body;
        const response = await PlayerHelper.addPlayerPosition({ player_id, position_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const addClub = async (request, reply) => {
    try {
        Validation.addClubValidation(request.body);
        const { club_name, club_location, club_img_url } = request.body;
        const response = await PlayerHelper.addClub({ club_name, club_location, club_img_url });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}


const editPlayer = async (request, reply) => {
    try {
        Validation.playerDetailValidation(request.params)
        Validation.editPlayerBodyValidation(request.body);
        const { player_id } = request.params
        const { player_name, club_id, player_img_url } = request.body;
        const response = await PlayerHelper.editPlayer({ player_id, player_name, club_id, player_img_url });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const deletePlayer = async (request, reply) => {
    try {
        Validation.playerDetailValidation(request.params)
        const { player_id } = request.params
        const response = await PlayerHelper.deletePlayer({ player_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const deletePlayerPosition = async (request, reply) => {
    try {
        Validation.playerPositionValidation(request.body)
        const { player_id, position_id } = request.body;
        const response = await PlayerHelper.deletePlayerPosition({ player_id, position_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const clubList = async (_request, reply) => {
    try {
        const response = await PlayerHelper.getClubList();
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const restorePlayer = async (request, reply) => {
    try {
        Validation.playerDetailValidation(request.params);
        const { player_id } = request.params;
        const response = await PlayerHelper.restorePlayer({ player_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const increasePlayerViewCount = async (request, reply) => {
    try {
        Validation.playerDetailValidation(request.params);
        const { player_id } = request.params;
        const response = await PlayerHelper.increasePlayerViewCount({ player_id });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

const multipleClubById = async (request, reply) => {
    console.log(request.body,"HERE")
    try {
        Validation.multipleClubByIdValidation(request.body);
        const { club_id_array } = request.body
        const response = await PlayerHelper.getMultipleClubById({ club_id_array });
        return reply.send(response);
    } catch (err) {
        console.log([fileName, 'list', 'ERROR'], { info: `${err}` });
        return reply.send(GeneralHelper.errorResponse(err));
    }
}

Router.get('/list', list);
Router.get('/details/:player_id', getPlayerDetail)
Router.get('/club-list', clubList)
Router.post('/multiple-club', multipleClubById)
Router.post('/add-player', addNewPlayer)
Router.post('/add-player-position', addPlayerPosition)
Router.post('/add-club', addClub)
Router.post('/restore/:player_id', restorePlayer)
Router.post('/increase-player-view-count/:player_id', increasePlayerViewCount)
Router.patch('/edit/:player_id', editPlayer)
Router.delete('/delete-player/:player_id', deletePlayer)
Router.delete('/delete-player-position', deletePlayerPosition)

module.exports = Router;
