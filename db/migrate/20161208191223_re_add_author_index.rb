class ReAddAuthorIndex < ActiveRecord::Migration[5.0]
  def change
    add_index :events, :author_id
  end
end
