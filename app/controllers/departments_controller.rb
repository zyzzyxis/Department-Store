class DepartmentsController < ApplicationController

def index
  @department = Department.all
  render component: "Departments"
end







end
