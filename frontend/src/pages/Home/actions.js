import { GET_ALL_PLAYERS, SET_ALL_PLAYERS, GET_SELECTED_CLUBS, SET_SELECTED_CLUBS } from "./constants";

export const getAllPlayers = (cbSuccess, cbFailed) => ({
    type: GET_ALL_PLAYERS,
    cbSuccess,
    cbFailed
})

export const setAllPlayers = (playerList) => ({
    type: SET_ALL_PLAYERS,
    playerList
})

export const getSelectedClubs = (club_id_array, cbSuccess, cbFailed) => ({
    type: GET_SELECTED_CLUBS,
    club_id_array,
    cbSuccess,
    cbFailed
})

export const setSelectedClubs = (clubList) => ({
    type: SET_SELECTED_CLUBS,
    clubList
})