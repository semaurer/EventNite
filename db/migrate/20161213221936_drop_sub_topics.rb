class DropSubTopics < ActiveRecord::Migration[5.0]
  def change
    drop_table :sub_topics
  end
end
