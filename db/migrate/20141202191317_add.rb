class Add < ActiveRecord::Migration
  def change
    add_column :books, :published_date, :string
    add_column :books, :page_count, :string
    add_column :books, :isbn10, :string
    add_column :books, :isbn13, :string
  end
end
