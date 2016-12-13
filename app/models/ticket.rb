# == Schema Information
#
# Table name: tickets
#
#  id            :integer          not null, primary key
#  purchase_date :date             not null
#  buyer_id      :integer          not null
#  event_id      :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Ticket < ActiveRecord::Base
  validates :purchase_date, :buyer, :event, presence: true


  belongs_to :buyer,
    class_name: :User,
    primary_key: :id,
    foreign_key: :buyer_id

  belongs_to :event,
    class_name: :Event,
    primary_key: :id,
    foreign_key: :event_id
end
