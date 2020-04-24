class PokerSession < ApplicationRecord
    has_many :poker_session_participants
    has_many :users, through: :poker_session_participants

    def get_data
        obj = {}
        participants = self.poker_session_participants.includes(:user)
        obj['participants'] = participants.map { |p| {user: p.user.get_data, vote: p.vote }}
        return obj
    end
end
