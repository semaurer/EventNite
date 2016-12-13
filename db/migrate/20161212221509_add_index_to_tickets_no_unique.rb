class AddIndexToTicketsNoUnique < ActiveRecord::Migration[5.0]
  def change
    add_index :tickets, :buyer_id
    add_index :tickets, :event_id
  end
end
