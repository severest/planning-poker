class User < ApplicationRecord
    def get_data
        {id: self.unique_key, name: self.name, spectator: self.spectator}
    end
end
