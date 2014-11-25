class SessionsController << ApplicationController
  def create
  end

  def destroy
    
  end

  def new
    render :new
  end

  private
  def user_params
    params.require(:user).permit()
  end

end