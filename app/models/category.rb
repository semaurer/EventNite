# == Schema Information
#
# Table name: categories
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  parent_category_id :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Category < ActiveRecord::Base
  validates :name, presence: true

  has_many :event_categories,
    class_name: :EventCategory,
    primary_key: :id,
    foreign_key: :category_id

  has_many :events,
    through: :event_categories,
    source: :event
end
