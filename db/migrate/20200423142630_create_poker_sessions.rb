class CreatePokerSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :poker_sessions do |t|
      t.string :unique_key

      t.timestamps
    end
  end
end
