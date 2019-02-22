import Immutable from 'seamless-immutable';

import {
    LOADING_GAME,
    SET_GAME
} from "../actions/game"

export const INITIAL_STATE = Immutable({
    isLoadingGame: true,
    activeGame: {}
});

export default function user(state = INITIAL_STATE, action) {

    if (typeof state === 'undefined') {
        return INITIAL_STATE;
    }

    switch (action.type) {

        case SET_GAME:
            return {
                ...state,
                activeGame: action.payload,
            };

        case LOADING_GAME:
            return {
                ...state,
                isLoadingGame: action.payload,
            };

        default:
            return state;
    }


}