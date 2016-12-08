class EditAuthorColumn < ActiveRecord::Migration[5.0]
  def change
    remove_index :events, :author_id
  end
end
