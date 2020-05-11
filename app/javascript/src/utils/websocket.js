import { createConsumer } from "@rails/actioncable";
import omit from 'lodash/omit';

import {
    getSessionData,
    updateSessionParticipant,
    removeSessionParticipant,
    setVoteVisibility,
} from "../redux/actions/poker-planning-session.js";


let pokerPlanning;
const consumer = createConsumer();

export const connectToPokerPlanning = (sessionId, dispatch) => {
    consumer.subscriptions.create({ channel: "ParticipantChannel", session_id: sessionId, user: window.myId }, {
        received() {
            // for direct messages
        }
    });

    pokerPlanning = consumer.subscriptions.create({ channel: "PokerSessionChannel", session_id: sessionId, user: window.myId }, {
        connected() {
            this.perform('appear');
        },
        received(message) {
            if (message.type === 'user_update') {
                dispatch(updateSessionParticipant(omit(message, 'type')));
            } else if (message.type === 'user_disconnect') {
                dispatch(removeSessionParticipant(message));
            } else if (message.type === 'show_votes') {
                dispatch(setVoteVisibility(true));
            } else if (message.type === 'hide_votes') {
                dispatch(setVoteVisibility(false));
            } else if (message.type === 'session_data') {
                dispatch(getSessionData(message.data));
            }
        }
    });
};

export const joinSession = (user) => {
    pokerPlanning.perform('joinSession', user);
};

export const submitVote = (vote) => {
    pokerPlanning.perform('submitVote', { vote });
};

export const showVotes = () => {
    pokerPlanning.perform('showVotes')
};

export const hideVotes = () => {
    pokerPlanning.perform('hideVotes');
};
