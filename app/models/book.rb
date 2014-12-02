# == Schema Information
#
# Table name: books
#
#  id             :integer          not null, primary key
#  title          :string(255)
#  author         :string(255)
#  description    :text
#  created_at     :datetime
#  updated_at     :datetime
#  published_date :string(255)
#  page_count     :string(255)
#  isbn10         :string(255)
#  isbn13         :string(255)
#

class Book < ActiveRecord::Base
  validates :title, :author, presence: true
  validates :isbn10, :isbn13, uniqueness: true, allow_nil: true 
  validates_uniqueness_of :title, scope: :author
  #DO I want to accept different printings?  This is a design decision

  #note that I dont' quite like this, author will be a model so we will have to change that string to Author Id, but that will involve creating books to create new authors in some instances so lets bear with that for a while

  #oh we can have a function that takes a string of an authors name, underscores it, and stores it in the database....and when pulled up from the database, we can capitalize it again?  Or enforce similar capi\talizations...yeah we'll just add the author id column later this will work
  has_many(
    :book_readerships,
    class_name: "BookReadership",
    foreign_key: :book_id,
    primary_key: :id
  )
end
