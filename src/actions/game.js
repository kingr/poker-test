export const GET_GAME = "GET_GAME";
export const SET_GAME = "SET_GAME";
export const LOADING_GAME = "LOADING_GAME";

export const getGameData = payload => ({
    type: GET_GAME,
    payload,
});