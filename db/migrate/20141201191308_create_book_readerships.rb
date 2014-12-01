class CreateBookReaderships < ActiveRecord::Migration
  def change
    create_table :book_readerships do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :bookshelf_id, null: false
      t.string :status

      t.timestamps
    end
    add_index :book_readerships, :user_id
    add_index :book_readerships, :bookshelf_id
    add_index :book_readerships, :book_id
    add_index :book_readerships, :status
  end
end
