class CreateTickets < ActiveRecord::Migration[5.0]
  def change
    create_table :tickets do |t|
      t.date :purchase_date, null: false
      t.integer :buyer_id, null: false
      t.integer :event_id, null: false

      t.timestamps
    end

    add_index :tickets, :buyer_id, unique: true
    add_index :tickets, :event_id, unique: true 
  end
end
