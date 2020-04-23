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
    self.broadcast({type: 'disconnect', user: params[:user]})
  end

  def appear(data)
    self.user.name = data['name']
    self.user.save
    self.poker_session.users.push(self.user)
    self.broadcast({type: 'connect', user: params[:user]})
    self.notification(self.poker_session.get_data)
  end

  protected

  def broadcast(data)
    ActionCable.server.broadcast("poker_session_#{params[:session_id]}", data)
  end

  def notification(data)
    ActionCable.server.broadcast("participant_#{params[:session_id]}_#{params[:user]}", data)
  end
end
