class AddSpectatorToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :spectator, :boolean, default: false
  end
end
