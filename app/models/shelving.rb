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

class Shelving < ActiveRecord::Base
end
