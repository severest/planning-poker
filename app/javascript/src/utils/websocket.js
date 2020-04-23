import { createConsumer } from "@rails/actioncable";

let pokerPlanning;
const consumer = createConsumer();

export const connectToPokerPlanning = (sessionId) => {
    const session_id = window.location.pathname.replace(/\//g, '');
    consumer.subscriptions.create({ channel: "ParticipantChannel", session_id, user: window.myId }, {
        connected() {
            // Called when the subscription is ready for use on the server
        },

        disconnected() {
            // Called when the subscription has been terminated by the server
        },

        received(data) {
            // Called when there's incoming data on the websocket for this channel
            console.log('participant', data);
        }
    });

    pokerPlanning = consumer.subscriptions.create({ channel: "PokerSessionChannel", session_id, user: window.myId }, {
        connected() {
            this.perform('appear', { user: window.myId });
        },

        disconnected() {
            // Called when the subscription has been terminated by the server
        },

        received(data) {
            // Called when there's incoming data on the websocket for this channel
            console.log('poker session', data);
        }
    });
}
