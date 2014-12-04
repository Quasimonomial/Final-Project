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
require 'net/http'

class Book < ActiveRecord::Base
  validates :title, :author, presence: true
  validates :isbn10, :isbn13, uniqueness: true, allow_nil: true 
  validates_uniqueness_of :title, scope: :author
  #DO I want to accept different printings?  This is a design decision

  #note that I dont' quite like this, author will be a model so we will have to change that string to Author Id, but that will involve creating books to create new authors in some instances so lets bear with that for a while

  #oh we can have a function that takes a string of an authors name, underscores it, and stores it in the database....and when pulled up from the database, we can capitalize it again?  Or enforce similar capi\talizations...yeah we'll just add the author id column later this will work
  def self.fetch_by_isbn isbn
    isbn = isbn.to_s
    book = Book.find_by_isbn10(isbn) || Book.find_by_isbn13(isbn)
    if book
      return book
    else
      json_book_data = Net::HTTP.get_response(URI.parse("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn))
      data = json_book_data.body
      json_hash = JSON.parse(data)
      book_item = json_hash["items"][0]

      puts puts puts puts
      isbn10 = ""
      isbn13 = ""
      p title = book_item["volumeInfo"]["title"]
      p author = book_item["volumeInfo"]["authors"][0]
      p published_date = book_item["volumeInfo"]["publishedDate"]
      p description = book_item["volumeInfo"]["description"]
      book_item["volumeInfo"]["industryIdentifiers"].each do |ii|
        p ii
        p ii["type"]
        if ii["type"] == "ISBN_10"
          p "test here"
          p isbn10 = ii["identifier"]
          break
        end
      end
      book_item["volumeInfo"]["industryIdentifiers"].each do |ii|
        p ii
        p ii["type"]
        if ii["type"] == "ISBN_13"
          p "test here"
          p isbn13 = ii["identifier"]
          break
        end
      end
      p page_count = book_item["volumeInfo"]["page_count"]
      book = Book.new(
        title: title,
        author: author,
        published_date: published_date,
        description: description,
        isbn10: isbn10,
        isbn13: isbn13,
        page_count: page_count
      )
      book.save!
      book
    end
  end

  has_many(
    :book_readerships,
    class_name: "BookReadership",
    foreign_key: :book_id,
    primary_key: :id
  )

  def json_to_book_hash

  end
end
