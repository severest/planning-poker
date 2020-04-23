class PokerSessionParticipant < ApplicationRecord
  belongs_to :user
  belongs_to :poker_session
end
