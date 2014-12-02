class RemovePublisherFromBooks < ActiveRecord::Migration
  def change
    remove_column :books, :publisher, :string
    remove_column :books, :year, :integer
    remove_column :books, :cover, :string
    remove_column :books, :isbn, :string
  end
end
