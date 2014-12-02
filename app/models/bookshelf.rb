# == Schema Information
#
# Table name: bookshelves
#
#  id          :integer          not null, primary key
#  title       :string(255)      not null
#  description :text
#  user_id     :integer          not null
#  created_at  :datetime
#  updated_at  :datetime
#

class Bookshelf < ActiveRecord::Base
  validates :title, :user_id, presence: true

  belongs_to(
    :user,
    class_name: "User",
    foreign_key: :user_id,
    primary_key: :id
  )
  has_many(
    :book_readerships,
    class_name: "BookReadership",
    foreign_key: :bookshelf_id,
    primary_key: :id
  )

  has_many(
    :books,
    through: :book_readerships,
    source: :book
  )
end
