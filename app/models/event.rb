# == Schema Information
#
# Table name: events
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  start_date_time    :datetime         not null
#  end_date_time      :datetime         not null
#  private            :boolean          default(FALSE), not null
#  author_id          :integer          not null
#  location           :string
#  event_type         :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  description        :text
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  price              :string           default("free"), not null
#

class Event < ActiveRecord::Base
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

  validates :author, :title, :start_date_time, :end_date_time, :price, presence: true
  validates_inclusion_of :private, in: [true, false]

  has_attached_file :image, default_url: "missing.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    class_name: :User,
    primary_key: :id,
    foreign_key: :author_id

  has_many :tickets,
    class_name: :Ticket,
    primary_key: :id,
    foreign_key: :event_id

  has_many :event_categories,
    class_name: :EventCategory,
    primary_key: :id,
    foreign_key: :event_id

  has_many :categories,
    through: :event_categories,
    source: :category

  def format_month(date_time)
    MONTHS[date_time.month]
  end

  def format_time(date_time)
    time = date_time.to_s.split()[1][0..4]
    formatted_time = ""

    if time[0].to_i > 0 && time[0..1].to_i < 12
      formatted_time = time + " AM"
    elsif time[0..1] == "00"
      formatted_time = "12" + time[2..4] + " AM"
    elsif time[0] == "0"
      formatted_time = time.slice(1..-1) + " AM"
    else
      if time[0..1] == "00"
        formatted_time = "12" + time[2..4] + " AM"
      else
        formatted_time = (time[0..1].to_i - 12).to_s + time[2..4] + " PM"
      end
    end
    formatted_time
  end

  def pad_day(date_day)
    return "0" + date_day.to_s if date_day < 10
    date_day
  end

  def get_day_of_the_week(calendar_week_day)
    DAYS_OF_THE_WEEK[calendar_week_day]
  end

  def format_date_time(date_time)
    day_of_the_week = self.get_day_of_the_week(date_time.wday)
    month = MONTHS[date_time.month]
    day = self.pad_day(date_time.day)
    year = date_time.year
    "#{day_of_the_week} #{month} #{day}, #{year}"
  end

  def format_end_date_day(date_time)
    self.format_month(date_time) + " " + (self.pad_day(date_time.day)).to_s
  end

end
