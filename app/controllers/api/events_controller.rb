class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    @event.author_id = current_user.id

    if @event.save
      catIds = params[:filter].split("_")
      catIds.each do |id|
        if id != "null" && id != ""
          EventCategory.create(category_id: id.to_i, event_id: @event.id)
        end
      end

      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def show
    @event = Event.find(params[:id])
  end

  def index
    @events = Event.all
  end

  def update
    @event = Event.find(params[:id])

    if @event.update_attributes(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end

  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: params[:id].to_i
  end

  def category_filter

    categories = Category.where("id = ? OR parent_category_id = ?", params[:id], params[:id])
    @events = []
    categories.each do |category|
      @events.concat(category.events)
    end

    render :index
  end

  def mark_saved
    @event = Event.find(params[:id])
    SavedEvent.create(user_id: current_user.id, event_id: @event.id)
    render json: @event
  end

  def mark_unsaved
    @event = find([params[:id])
    @saved_event = SavedEvent.where("user_id = ?, event_id = ?", current_user.id, @event.id)
    @saved_event.destroy unless @saved_event.nil?
    render json: @event
  end

  def fetch_saved_events
    @events = current_user.events
    render json: @events
  end

  private

  def event_params
    params.require(:event).permit(:title, :start_date_time, :end_date_time,
      :private, :location, :event_type, :description, :image, :price)
  end

end
