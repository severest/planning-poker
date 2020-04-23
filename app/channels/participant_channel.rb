class ParticipantChannel < ApplicationCable::Channel
  def subscribed
    stream_from "participant_#{params[:session_id]}_#{params[:user]}"
  end
end
