class ItemsController < ApplicationController

  def index
    @department = Department.find(params[:department_id])
    @items = @department.items

    render component: "Items"
  end

  def show
    @department = Department.find(params[:department_id])
    @item = @department.items.find(params[:id])

    puts @item
    render component: "Item", props: {item: @item, department: @department}
  end
end
