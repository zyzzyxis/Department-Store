class DepartmentsController < ApplicationController

def index
  @department = Department.all
  render component: "Departments"
end


def show
  @department = Department.find(params[:id])
  @item = @department.items

  render component: "Department", props: {department: @department, item: @item}
end




end
