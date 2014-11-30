# == Schema Information
#
# Table name: books
#
#  id          :integer          not null, primary key
#  title       :string(255)
#  author      :string(255)
#  year        :integer
#  isbn        :string(255)
#  publisher   :string(255)
#  description :text
#  cover       :string(255)
#  created_at  :datetime
#  updated_at  :datetime
#

class Book < ActiveRecord::Base
  validates :title, :author, presence: true
  validates :isbn, uniqueness: true, allow_nil: true 
  validates_uniqueness_of :title, scope: :author

  #note that I dont' quite like this, author will be a model so we will have to change that string to Author Id, but that will involve creating books to create new authors in some instances so lets bear with that for a while

  #oh we can have a function that takes a string of an authors name, underscores it, and stores it in the database....and when pulled up from the database, we can capitalize it again?  Or enforce similar capi\talizations...yeah we'll just add the author id column later this will work
  has_many(
    :book_statuses,
    class_name: "BookStatus",
    foreign_key: :book_id,
    primary_key: :id
  )

end
