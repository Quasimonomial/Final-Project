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

require 'test_helper'

class BookStatusTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
