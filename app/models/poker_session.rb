class PokerSession < ApplicationRecord
    has_many :poker_session_participants
    has_many :users, through: :poker_session_participants

    def get_data
        obj = {}
        participants = self.poker_session_participants.includes(:user)
        obj['participants'] = participants.map { |p| {name: p.user.name, user: p.user.unique_key} }
        return obj
    end
end
