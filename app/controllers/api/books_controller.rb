module Api
  class BooksController < ApiController
    def index #actually might want to delete this later if there are a lot of books
      @books = Book.all
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

    def show
      @book = Book.find(params[:id])

      if @book
        render :show
      else
        render :json ["That book doesnt' exist", status: 422]
      end
    end

    def update
      @book = Book.find(params[:id])
      if @book.update_attributes(book_params)
        render json: @book
      else
        render json: [@book.errors.full_messages, status: 422]
      end
    end

    def destroy #definately want this to destroy books that turn out to have the same ISBN number
      @book = Book.find(params[:id])
      @book.destroy
      render json: { message: 'Book Destroyed!'}

    end

    private
    def book_params
      params.require(:book).permit(:title, :author, :description, :published_date, :page_count, :isbn10, :isbn13)
    end
  end
end
