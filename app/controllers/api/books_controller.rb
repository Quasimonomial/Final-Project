module Api
  class BooksController < ApiController

    private
    def book_params
      params.require(:book).permit(:title, :author, :year, :isbn, :publisher, :description, :cover)
    end
  end
end