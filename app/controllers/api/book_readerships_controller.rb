module Api
  class BookReadershipsController < ApiController
    def index
      @book_readerships = current_user.book_readerships
      render json: @book_readerships      
    end

    def create
      @book_readership = current_user.book_readerships.new(book_readership_params)
      if @book_readership.save
        render json: @book_readership
      else
        render json: @book_readership.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @book_readership = BookReaderships.find(params[:id])
      if @book_readership
        render :show
      else
        rende json: ["unable to find readership"], status: 403
      end
    end

    def update
      @book_readership = BookReadership.find(params[:id])
      if @book_readership.update(book_readership_params)
        render json: @book_readership
      else
        render json: @book_readership.errors.full_messages, status: :unprocessable_entity
    end

    def destroy
      @book_readership = BookReadership.find(params[:id])
      @book_readership.try(:destroy)
      render json: {}
    end

    private
    def book_readership_params
      params.require(:book_readership).permit(:bookshelf_id, :book_id, :status)
    end
  end
end