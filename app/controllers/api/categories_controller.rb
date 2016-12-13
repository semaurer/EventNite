class Api::CategoriesController < ApplicationController

  def create
    @category = @category.new(category_params)

    if @category.save
      render json: @category
    else
      render json: @category.errors.full_messages, status: 422
    end

  end

  def index
    @categories = Category.all
  end

  private

  def category_params
    params.require(:category).permit(:name, :parent_category_id)
  end
end
