class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  private
  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])

  end

  def log_in! user
    puts "logging in #{user}"
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def log_out!
    current_user.try(:reset_token!)
    @current_user = nil
    session[:session_token] = nil
  end

  def logged_in?
    puts "space"
    !!current_user
  end
  
  private
  def require_logged_in!
    redirect_to new_session_url unless logged_in?
  end
end
