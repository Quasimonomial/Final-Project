class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :title, not_null: true
      t.string :author, not_null: true
      t.integer :year
      t.string :isbn #this site uses isbn-13
      t.string :publisher
      t.text :description
      t.string :cover #this is a string that is the filepath to the JPEG on the server

      t.timestamps
    end
    add_index :books, :title
    add_index :books, :author
    add_index :books, :isbn, unique: true 

  end
end
