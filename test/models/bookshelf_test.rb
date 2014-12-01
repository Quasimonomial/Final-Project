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

require 'test_helper'

class BookshelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
