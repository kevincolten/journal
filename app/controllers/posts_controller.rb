class PostsController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

  def create
    @post = Post.new(params[:post])

    if @post.save
      render :json => @post
    else
      render :json => @post.errors, :status => 422
    end
  end

  def index
    @posts = Post.all

    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts}
    end
  end

end
