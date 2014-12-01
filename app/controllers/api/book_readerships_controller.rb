module Api
  class BookReadershipsController < ApiController
    def index
      @book_readerships = current_user.book_readerships
      render json: @book_statuses      
    end

    def create
      
    end

    def show

    end

    def update

    end

    def destroy

    end

    private
    def book_readership_params
      params.require(:book_readership).permit(:user_id, :bookshelf_id, :book_id, :status)
    end
  end
end