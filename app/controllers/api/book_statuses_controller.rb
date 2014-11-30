module Api
  class BookStatusesController < ApiController
    def create
      @book_status = current_user.book_statuses.new(book_status_params)
      if @book_status.save
        render json: @book_status
      else
        render json: @book_status.errors.full_messages, status: :unprocessable_entity
      end
    end

    def index
      @book_statuses = BookStatus.all
      render json: @book_statuses
    end

    def show
      #@book_status = BookStatus.find(params[:id])
      #consider that we actually want to call show with a given ID
      #current_user.book_statuses.find_by_book_id(params[:book_status][:book_id]);
      @book_status = current_user.book_statuses.find_by_book_id(params[:book_statuses][:book_id])

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