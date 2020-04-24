import {
    GET_SESSION_DATA,
    UPDATE_SESSION_PARTICIPANT,
    SET_VOTE_VISIBILITY,
    REMOVE_SESSION_PARTICIPANT,
} from "../action-types/poker-planning-session.js";


export const getSessionData = (data) => {
    return {
        type: GET_SESSION_DATA,
        data,
    };
};

export const updateSessionParticipant = (participant) => {
    return {
        type: UPDATE_SESSION_PARTICIPANT,
        participant,
    };
};

export const removeSessionParticipant = (participant) => {
    return {
        type: REMOVE_SESSION_PARTICIPANT,
        participant,
    };
};

export const setVoteVisibility = (votesVisible) => {
    return {
        type: SET_VOTE_VISIBILITY,
        votesVisible,
    };
};
