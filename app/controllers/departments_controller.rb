class DepartmentsController < ApplicationController

  def index
    @departments = Department.all
    render component: "Departments", props: {departments: @departments}
  end


  def show
    @department = Department.find(params[:id])
    @items = @department.items

    render component: "Department", props: {department: @department, items: @items}
  end

  def edit
    @department = Department.find(params[:id])
    @items = @department.items

    render component: "DepartmentEdit", props: {department: @department, items: @items}
  end

  def update
    department = Department.find(params[:id])
    if department.update(item: params[:department][:item], inventory: params[:department][:inventory])
      redirect_to departments_path
    else 
      render component: "DepartmentEdit", props: {department: @department, items: @items}
    end
  end

  def create
    department = Department.new
    if department.create(item: params[:department][:item], inventory: params[:department][:inventory])
      redirect_to departments_path
    else render component: "CreateDepartment", props: {department: @department, items: @items}
  end


end