# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141201191308) do

  create_table "book_readerships", force: true do |t|
    t.integer  "user_id",      null: false
    t.integer  "book_id",      null: false
    t.integer  "bookshelf_id", null: false
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "book_readerships", ["book_id"], name: "index_book_readerships_on_book_id"
  add_index "book_readerships", ["bookshelf_id"], name: "index_book_readerships_on_bookshelf_id"
  add_index "book_readerships", ["status"], name: "index_book_readerships_on_status"
  add_index "book_readerships", ["user_id"], name: "index_book_readerships_on_user_id"

  create_table "book_statuses", force: true do |t|
    t.integer  "book_id",    null: false
    t.integer  "user_id",    null: false
    t.string   "status",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "book_statuses", ["user_id"], name: "index_book_statuses_on_user_id"

  create_table "books", force: true do |t|
    t.string   "title"
    t.string   "author"
    t.integer  "year"
    t.string   "isbn"
    t.string   "publisher"
    t.text     "description"
    t.string   "cover"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "books", ["author"], name: "index_books_on_author"
  add_index "books", ["isbn"], name: "index_books_on_isbn", unique: true
  add_index "books", ["title"], name: "index_books_on_title"

  create_table "bookshelves", force: true do |t|
    t.string   "title",       null: false
    t.text     "description"
    t.integer  "user_id",     null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "bookshelves", ["user_id"], name: "index_bookshelves_on_user_id"

  create_table "shelvings", force: true do |t|
    t.integer  "book_id",      null: false
    t.integer  "bookshelf_id", null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "shelvings", ["book_id"], name: "index_shelvings_on_book_id"
  add_index "shelvings", ["bookshelf_id"], name: "index_shelvings_on_bookshelf_id"

  create_table "users", force: true do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email"

end
