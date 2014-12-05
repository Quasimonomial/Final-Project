module Api
  class BookReadershipsController < ApiController
    def index
      @book_readerships = current_user.book_readerships
      render json: @book_readerships      
    end

    def create
      # puts "test" if book_readership_params[:isbn]
      # puts "test2" if book_readership_params[:book_id]
      @book_readership = current_user.book_readerships.new(book_readership_params)
      BookReadership.clear_other_shelves(@book_readership.book_id)
      if @book_readership.save
        render json: @book_readership.book
      else
        render json: @book_readership.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @book_readership = BookReaderships.find(params[:id])
      if @book_readership
        render :show
      else
        render json: ["unable to find readership"], status: 403
      end
    end

    def update
      @book_readership = BookReadership.find(params[:id])
      if @book_readership.update(book_readership_params)
        render json: @book_readership
      else
        render json: @book_readership.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @book_readership = BookReadership.where(bookshelf_id: params[:book_readership][:bookshelf_id], book_id: params[:book_readership][:book_id]).first
      if @book_readership#.try(:destroy)
        p @book_readership
        @book_readership.destroy
      end
      book = Book.find(params[:book_readership][:book_id])
      render json: book
    end

    private
    def book_readership_params
      params.require(:book_readership).permit(:bookshelf_id, :book_id, :status, :isbn)
    end
  end
end