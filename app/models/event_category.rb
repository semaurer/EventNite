# == Schema Information
#
# Table name: event_categories
#
#  id          :integer          not null, primary key
#  event_id    :integer          not null
#  category_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class EventCategory < ActiveRecord::Base
  validates :event, :category, presence: true

  belongs_to :category
  belongs_to :event
end
