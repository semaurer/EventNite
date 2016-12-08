class CreateEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.datetime :start_date_time, null: false
      t.datetime :end_date_time, null: false
      t.boolean :private, null: false, default: false
      t.integer :author_id, null: false
      t.string :location
      t.string :event_type

      t.timestamps
    end

    add_index :events, :title
    add_index :events, :start_date_time
    add_index :events, :author_id, unique: true
  end
end
