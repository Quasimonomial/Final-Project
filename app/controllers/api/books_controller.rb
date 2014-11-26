module Api
  class BooksController < ApiController

    def index #actually might want to delete this later if there are a lot of books
      @books = Books.all
      render json: @books
    end

    def create
      @book = Book.new(book_params)
      if @book.save
        render json: @book
      else
        render json: @book.errors.full_messages, status: :unprocessable_entity
      end
    end

    def new
    end
    
    def edit

    end

    def show

    end

    def update

    end

    def destroy #definately want this to destroy books that turn out to have the same ISBN number

    end

    private
    def book_params
      params.require(:book).permit(:title, :author, :year, :isbn, :publisher, :description, :cover)
    end
  end
end