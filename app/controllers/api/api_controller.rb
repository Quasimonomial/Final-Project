module Api
  class ApiController < ApplicationController
    #probably require sign in before anyone uses this but that is not implimented yet
    #also an class level restrictions can go here
    before_action :require_logged_in!
  end
end