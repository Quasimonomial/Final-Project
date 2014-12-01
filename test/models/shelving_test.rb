# == Schema Information
#
# Table name: shelvings
#
#  id           :integer          not null, primary key
#  book_id      :integer          not null
#  bookshelf_id :integer          not null
#  created_at   :datetime
#  updated_at   :datetime
#

require 'test_helper'

class ShelvingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
