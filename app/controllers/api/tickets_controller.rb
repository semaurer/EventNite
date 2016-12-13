class Api::TicketsController < ApplicationController

  def create
    @ticket = Ticket.new(ticket_params)
    @ticket.buyer_id = current_user.id
    @ticket.purchase_date = Time.now.to_date

    if @ticket.save
      render json: @ticket
    else
      render json: @ticket.errors.full_messages, status: 422
    end

  end

  def index
    @tickets = Ticket.all
  end

  private

  def ticket_params
    params.require(:ticket).permit(:event_id)
  end
end
