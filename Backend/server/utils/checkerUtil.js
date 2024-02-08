const db = require('../../models/index')
const _ = require('lodash');

const isPlayerDeleted = async (dataObject) => {
    const { player_id } = dataObject
    try {
        const playerData = await db.Players.findOne({
            where: {
                player_id: player_id,
            }
        });
        console.log(playerData)
        if (_.isEmpty(playerData)) {
            return Promise.resolve(true);
        }
        if (playerData.is_deleted == 0) {
            return Promise.resolve(false);
        } else if (playerData.is_deleted == 1) {
            return Promise.resolve(true);
        }
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch player. Check the server logs for details.");
    }
}

const isUserDeleted = async (dataObject) => {
    const { user_id } = dataObject
    try {
        const userData = await db.Users.findOne({
            where: {
                user_id: user_id,
            }
        });
        if (_.isEmpty(userData)) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch user. Check the server logs for details.");
    }
}

const isUserDeletedByEmail = async (dataObject) => {
    const { user_email } = dataObject
    try {
        const userData = await db.Users.findOne({
            where: {
                user_email: user_email,
            }
        });
        if (_.isEmpty(userData)) {
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    } catch (err) {
        console.error(err);
        return Promise.reject("Failed to fetch user. Check the server logs for details.");
    }
}

module.exports = {
    isPlayerDeleted,
    isUserDeleted,
    isUserDeletedByEmail
}