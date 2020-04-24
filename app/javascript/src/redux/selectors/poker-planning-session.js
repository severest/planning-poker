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
