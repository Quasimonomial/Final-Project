# == Schema Information
#
# Table name: book_statuses
#
#  id         :integer          not null, primary key
#  book_id    :integer          not null
#  user_id    :integer          not null
#  status     :string(255)      not null
#  created_at :datetime
#  updated_at :datetime
#

class BookStatus < ActiveRecord::Base
  validates :book_id, :user_id, :status, presence: true
  validates_uniqueness_of :book_id, scope: :user_id #are there any performance benifits to switching these around or vice versa?
  validates :status, inclusion: {in: ["read", "currently reading", "to read", 'wishlist', 'untracked']}, allow_nil: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :book,
    class_name: "Book",
    foreign_key: :book_id,
    primary_key: :id
  )  
end
