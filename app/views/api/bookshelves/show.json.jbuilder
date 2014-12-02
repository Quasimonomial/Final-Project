json.extract! @bookshelf, :id, :title, :description

json.books @bookshelf.books do |book|
  json.extract! book, :id, :title, :author
end