import {
    voteConsensusSelector,
} from './poker-planning-session.js';


test('gets no consensus when nobody has voted', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: null },
                { vote: null },
                { vote: null },
            ],
        },
    })).toBeNull();
});

test('gets no consensus when everybody votes differently', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: "1" },
                { vote: "2" },
                { vote: "3" },
            ],
        },
    })).toBeNull();
});

test('gets no consensus when one person has voted', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: "2" },
                { vote: null },
                { vote: null },
            ],
        },
    })).toBeNull();
});


test('gets a consensus when over half has voted', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: "2" },
                { vote: "2" },
                { vote: null },
            ],
        },
    })).toBe('2');
});

test('gets a consensus when exactly half has voted', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: "2" },
                { vote: "2" },
                { vote: "3" },
                { vote: "5" },
            ],
        },
    })).toBe('2');
});

test('gets no consensus when exactly split', () => {
    expect(voteConsensusSelector({
        pokerPlanningSession: {
            participants: [
                { vote: "2" },
                { vote: "2" },
                { vote: "3" },
                { vote: "3" },
            ],
        },
    })).toBeNull();
});