class CreatePokerSessionParticipants < ActiveRecord::Migration[6.0]
  def change
    create_table :poker_session_participants do |t|
      t.references :user, null: false, foreign_key: true
      t.references :poker_session, null: false, foreign_key: true
      t.string :vote

      t.timestamps
    end
  end
end
