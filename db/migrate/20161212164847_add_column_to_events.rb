class AddColumnToEvents < ActiveRecord::Migration[5.0]
  def change
    add_column :events, :price, :string, null: false, default: "free"
  end
end
