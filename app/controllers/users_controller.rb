class UsersController < ApplicationController
  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @users }
    end

  end

  def show
      @user = User.find(params[:id])
      if @user
        @posts = @user.favorited_posts
        render actions: :show
        @favorites = @user.favorites.all
      else
          render file: 'public/404', status: 404, formats: [:html]
      end
    end

  def favorited?(post)
      favorites.find_by(post_id: post.id).present?
    end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end

end
