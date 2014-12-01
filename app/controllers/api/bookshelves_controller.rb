module Api
  class BookshelvesController < ApiController 
    def index
      @bookshelves = current_user.bookshelves
      render json: @bookshelves
    end

    def show
      @bookshelf = Bookshelf.find(params[:id])

      if @bookshelf
        render :show
      else
        render json: @bookshelf.errors.full_messages, status: :unprocessable_entity
      end
    end

    def update
      @bookshelf = Bookshelf.find(params[:id])
      if @bookshelf.update_attributes(bookshelf_params)
        render json: @bookshelf
      else
        render json: [@bookshelf.errors.full_messages, status: 422]
      end
    end

    def create
      @bookshelf = current_user.book_statuses.new(bookshelf_params)
      if @bookshelf.save
        render json: @bookshelf
      else
        render json: @books.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @bookshelf = Bookshelves.find(params[:id])
      @bookshelf.try(:destroy)
      render json: {message: 'Bookshelf Destroyed'}
    end

    private
    def bookshelf_params
      params.require(:bookshelf).permit(:title, :description)
    end
  end
end