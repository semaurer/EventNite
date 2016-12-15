# == Schema Information
#
# Table name: saved_events
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  event_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class SavedEvent < ActiveRecord::Base
  validates :user, :event, presence: true

  belongs_to :user
  belongs_to :event
end
