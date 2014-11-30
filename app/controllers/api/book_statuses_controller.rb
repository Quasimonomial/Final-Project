module API
  class BookStatusesController < ApiController
    def create
      @book_status = current_user.book_statuses.new(book_status_params)
      if @book_status.save
        render json: @book_status
      else
        render json: @book_status.errors.full_messages, status: :unprocessable_entity
      end
    end

    def show
      @book_status = BookStatus.find(params[:id])

      if @book_status
        render :show
      else
        render json: ["Unable to find that status"], status: 403
      end
    end

    def update
      @book_status = BookStatus.find(params[:id])
      if @book_status.update(book_status_params)
        render json: @book_status
      else
        render json: @book_status.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @book_status = BookStatus.find(params[:id])
      @book_status.try(:destroy)
      render json: {}
    end

    private
    def book_status_params
      params.require(:book_status).permit(:book_id, :status)
    end
  end
end