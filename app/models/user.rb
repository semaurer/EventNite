# == Schema Information
#
# Table name: users
#
#  id                    :integer          not null, primary key
#  email                 :string           not null
#  fname                 :string           not null
#  lname                 :string           not null
#  password_digest       :string           not null
#  session_token         :string           not null
#  organizer_name        :string
#  organizer_description :text
#  created_at            :datetime         not null
#  updated_at            :datetime         not null
#

class User < ActiveRecord::Base
  after_initialize :ensure_session_token

  validates :email, :session_token, presence: true, uniqueness: true
  validates :fname, :lname, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :events,
    class_name: :Event,
    primary_key: :id,
    foreign_key: :author_id

  has_many :tickets,
    class_name: :Ticket,
    primary_key: :id,
    foreign_key: :buyer_id

  has_many :saved_event_records,
    class_name: :SavedEvent,
    primary_key: :id,
    foreign_key: :user_id

  has_many :saved_events,
    through: :saved_event_records,
    source: :event

  attr_reader :password

  def parse_saved_event_ids
    saved_events = self.saved_events
    saved_event_ids = []
    if saved_events
      saved_events.each do |event|
        saved_event_ids.push(event.id)
      end
    end
    saved_event_ids
  end


  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
