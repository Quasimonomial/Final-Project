# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string(255)      not null
#  password_digest :string(255)      not null
#  session_token   :string(255)      not null
#  created_at      :datetime
#  updated_at      :datetime
#

class User < ActiveRecord::Base
  validates  :email, :password_digest, :session_token, presence: true
  validates  :email, uniqueness: true, format: {with: /@/}
  validates :password, length: {minimum: 6, allow_nil: true}
  
  attr_reader :password

  after_initialize :ensure_session_token

  has_many(
    :bookshelves,
    class_name: "Bookshelf",
    foreign_key: :user_id,
    primary_key: :id
  )

  has_many(
    :book_statuses,
    class_name: "BookStatus",
    foreign_key: :user_id,
    primary_key: :id
  )

  def self.find_by_credentials email, password
    user =User.find_by_email(email)
    if user && user.valid_password?(password)
      return user
    end
    nil
  end

  def valid_password? password
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password= password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
