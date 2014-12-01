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

require 'test_helper'

class BookReadershipTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
