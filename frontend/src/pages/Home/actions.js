import { GET_ALL_PLAYERS, SET_ALL_PLAYERS, GET_ALL_CLUBS, SET_ALL_CLUBS } from "./constants";

export const getAllPlayers = (cbSuccess, cbFailed) => ({
    type: GET_ALL_PLAYERS,
    cbSuccess,
    cbFailed
})

export const setAllPlayers = (playerList) => ({
    type: SET_ALL_PLAYERS,
    playerList
})

export const getAllClubs = (club_id_array, cbSuccess, cbFailed) => ({
    type: GET_ALL_CLUBS,
    club_id_array,
    cbSuccess,
    cbFailed
})

export const setAllClubs = (clubList) => ({
    type: SET_ALL_CLUBS,
    clubList
})