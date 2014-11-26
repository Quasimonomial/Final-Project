class SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    );
    if user
      log_in!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email or passowrd"]
      render :new
    end
  end

  def destroy
    log_out!
    redirect_to new_session_url
  end

  def new
    render :new
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end

end