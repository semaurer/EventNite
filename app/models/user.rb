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
  after_intialize :ensure_session_token
  
  validates :email, :session_token, presence: true, uniqueness: true
  validates :fname, :lname, :password_digest, :organizer_name,
    :organizer_description, presence: true
  validates :password, length: { minimum: 6 allow_nil: true }

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user && user.is_password?(password)
    user
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def self.reset_session_token!
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
