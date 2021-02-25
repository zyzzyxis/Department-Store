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

  def edit
    @department = Department.find(params[:department_id])
    @item = @department.items.find(params[:id])
  
    render component: "ItemEdit", props: {department: @department, item: @item}
  end
  
  def update
    item = Item.find(params[:id])
    if item.update(quantity: params[:item][:quantity], comment: params[:item][:comment])
      redirect_to department_items_path
    else 
      render component: "ItemEdit", props: {department: @department, items: @items}
    end
  end

end
