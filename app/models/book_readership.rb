# == Schema Information
#
# Table name: book_readerships
#
#  id           :integer          not null, primary key
#  user_id      :integer          not null
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  status       :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class BookReadership < ActiveRecord::Base
  validates :user_id, :book_id, :bookshelf_id, presence: true
  validates :status, inclusion: {in: ["read", "currently reading", "to read", 'wishlist', 'untracked']}, allow_nil: true
  validates :book_id, uniqueness: {scope: :user_id}

  belongs_to(
    :book,
    class_name: "Book",
    foreign_key: :book_id,
    primary_key: :id
  )

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )

  belongs_to(
    :bookshelf
    class_name: "Bookshelf",
    foreign_key: :bookshelf_id,
    primary_key: :id
  )


end
