class ItemsController < ApplicationController

  def index
    @department = Department.find(params[:department_id])
    @items = @department.items

    puts @item
    render component: "Items",  props: {items: @items, department: @department}
  end

  def show
    @department = Department.find(params[:department_id])
    @item = @department.items.find(params[:id])

    puts @item
    render component: "Item", props: {item: @item, department: @department}
  end
end
