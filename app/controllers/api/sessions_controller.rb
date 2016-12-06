class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render "/api/users/show"
    else
      render json: ["Invalid User name or Password"], status: 401
    end

  end

  def destroy

    if current_user
      log_out
      render json: {}
    else
      render json: ["There is no current user"], status: 404
    end

  end

end
