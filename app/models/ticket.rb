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
  MONTHS = {
    1 => "Jan",
    2 => "Feb",
    3 => "Mar",
    4 => "Apr",
    5 => "May",
    6 => "Jun",
    7 => "Jul",
    8 => "Aug",
    9 => "Sep",
    10 => "Oct",
    11 => "Nov",
    12 => "Dec"
  }

  DAYS_OF_THE_WEEK = {
    1 => "Mon",
    2 => "Tues",
    3 => "Wed",
    4 => "Thurs",
    5 => "Fri",
    6 => "Sat",
    7 => "Sun",
  }

  validates :purchase_date, :buyer, :event, presence: true


  belongs_to :buyer,
    class_name: :User,
    primary_key: :id,
    foreign_key: :buyer_id

  belongs_to :event

  def format_purchase_date(date)
    week_day = DAYS_OF_THE_WEEK[date.wday]
    month = MONTHS[date.month]
    day = self.pad_day(date.day)
    year = date.year.to_s
    formatted_date = "#{week_day}, #{month} #{day} #{year}"
  end

  def pad_day(date_day)
    return "0" + date_day.to_s if date_day < 10
    date_day
  end

end
