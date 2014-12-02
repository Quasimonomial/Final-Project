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

require 'test_helper'

class BookTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
