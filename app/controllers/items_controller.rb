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
  
  
  def new
    @department = Department.find(params[:department_id])
    render component: "ItemNew", props: {department: @department}
  end

  def create
    @department = Department.find(params[:department_id])
    item = @department.items.new(item_params) 
    
    if item.save
      redirect_to department_items_path
    else render component: "ItemNew", props: {department: @department}
    end
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


  def destroy
    # render component: "NoteDelete"
    @department = Department.find(params[:department_id])
    @item = @department.items.find(params[:id])
    @item.destroy

    redirect_to department_items_path 
  end




  private
  def item_params
    params.require(:item).permit(:quantity, :comment)
  end

end
