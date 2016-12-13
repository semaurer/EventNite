class RemoveIndexesFromTickets < ActiveRecord::Migration[5.0]
  def change
    remove_index :tickets, :buyer_id
    remove_index :tickets, :event_id
  end
end
