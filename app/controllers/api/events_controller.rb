class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.author_id = current_user.id

    if @event.save
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def show
    @event = Event.find(params[:id])
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_date_time, :end_date_time,
      :private, :location, :event_type, :description, :image)
  end

end
