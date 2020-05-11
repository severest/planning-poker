class PokerSessionChannel < ApplicationCable::Channel
  attr_accessor :user
  attr_accessor :poker_session

  def subscribed
    self.poker_session = PokerSession.where(unique_key: params[:session_id]).first_or_create
    self.user = User.where(unique_key: params[:user]).first_or_create
    stream_from "poker_session_#{params[:session_id]}"
  end

  def unsubscribed
    self.poker_session.users.destroy(self.user)
    self.broadcast({type: 'user_disconnect', user: self.user.get_data})
  end

  def appear(data)
    self.poker_session.users.push(self.user)
    self.broadcast({type: 'session_data', data: self.poker_session.get_data})
  end

  def joinSession(data)
    self.user.update(name: data['name'], spectator: data['spectator'])
    self.broadcast({type: 'user_update', user: self.user.get_data})
  end

  def submitVote(data)
    self.poker_session.poker_session_participants.where(user: self.user).update(vote: data['vote'])
    self.broadcast({type: 'user_update', user: self.user.get_data, vote: data['vote']})
  end

  def showVotes
    self.broadcast({type: 'show_votes'})
  end

  def hideVotes
    self.poker_session.poker_session_participants.all.update(vote: nil)
    self.broadcast({type: 'hide_votes'})
    self.broadcast({type: 'session_data', data: self.poker_session.get_data})
  end

  protected

  def broadcast(data)
    ActionCable.server.broadcast("poker_session_#{params[:session_id]}", data)
  end

  def notification(data)
    ActionCable.server.broadcast("participant_#{params[:session_id]}_#{params[:user]}", data)
  end
end
