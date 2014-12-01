module Api
  class BookReadershipsController < ApiController

    private
    def book_readership_params
      params.require(:book_readership).permit(:user_id, :bookshelf_id, :book_id, :status)
    end
  end
end