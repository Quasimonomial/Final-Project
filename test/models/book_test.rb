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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
