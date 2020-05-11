import { createSelector } from 'reselect';

const pokerPlanningSession = (state) => state.pokerPlanningSession;

export const currentUserSelector = createSelector(
    pokerPlanningSession,
    (pokerSession) => {
        return pokerSession.participants.find(({ user }) => user.id === window.myId);
    }
);

export const namedUserSelector = createSelector(
    pokerPlanningSession,
    (pokerSession) => {
        return pokerSession.participants.filter(({ user }) => user.name && user.name.trim() !== '');
    }
);

export const votesVisibleSelector = createSelector(
    pokerPlanningSession,
    (pokerSession) => pokerSession.votesVisible,
);

const votesSelector = createSelector(
    pokerPlanningSession,
    (pokerSession) => pokerSession.participants.map(({ vote }) => vote),
);

export const voteConsensusSelector = createSelector(
    votesSelector,
    (votes) => {
        let consensus = null;
        const nonNullVotes = votes.filter((v) => v !== null);
        let halfOfParticipants = Math.ceil(votes.length / 2);
        for(let pIndex = 0; pIndex < nonNullVotes.length; pIndex++) {
            const vote = nonNullVotes[pIndex];
            if (votes.filter((v) => v === vote).length >= halfOfParticipants) {
                if (consensus !== null && consensus !== vote) {
                    return null;
                }
                consensus = vote;
            }
        }
        return consensus;
    }
);