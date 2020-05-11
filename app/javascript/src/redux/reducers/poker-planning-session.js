import {
    GET_SESSION_DATA,
    UPDATE_SESSION_PARTICIPANT,
    SET_VOTE_VISIBILITY,
    REMOVE_SESSION_PARTICIPANT,
} from "../action-types/poker-planning-session.js";


const initialState = {
    participants: [],
    votesVisible: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SESSION_DATA:
            return {
                ...state,
                participants: action.data.participants,
            };
        case UPDATE_SESSION_PARTICIPANT: {
            let newParticipants;
            if (state.participants.some(({ user }) => user.id === action.participant.user.id)) {
                newParticipants = state.participants.map((p) => {
                    if (p.user.id === action.participant.user.id) {
                        return {
                            ...p,
                            ...action.participant,
                        };
                    }
                    return p;
                });
            } else {
                newParticipants = state.participants.concat(action.participant);
            }
            return {
                ...state,
                participants: newParticipants,
            };
        }
        case SET_VOTE_VISIBILITY:
            return {
                ...state,
                votesVisible: action.votesVisible,
            };
        case REMOVE_SESSION_PARTICIPANT:
            return {
                ...state,
                participants: state.participants.filter(({ user }) => user.id !== action.participant.user.id),
            };
        default:
            return state;
    }
};

export default reducer;
