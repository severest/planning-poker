FactoryBot.define do
  factory :poker_session_participant do
    user { nil }
    poker_session { nil }
    vote { "MyString" }
  end
end
