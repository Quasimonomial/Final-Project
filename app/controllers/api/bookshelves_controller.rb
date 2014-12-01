module Api
  class BookshelvesController < ApiController 
    def index
      @bookshelves = Bookshelf.all
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

    end

    def create

    end

    def destroy
      
    end
  end
end