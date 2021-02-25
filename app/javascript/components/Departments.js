import React from 'react'

const Departments = (props) =>{

  const renderDepartments = () => {
    //map through all departments, generate data for each in page
    return props.departments.map( department => {
      return(
        <div className="item-container">
          <div className="item-content">
            <h2>Department {department.id}</h2>
            <p>Item name: {department.item}</p>
            <p>Inventory: {department.inventory}</p>
            <hr className="itemSeparator"></hr>
          </div>

          <a href={`/departments/${department.id}/items`}>Open Department</a>
          <a href={`/departments/${department.id}/edit`}>Edit Department</a>
          <a href={`/departments/${department.id}/`} data-method='delete'>Delete Department</a>
          
        </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>All Departments </h1>
      <div className='nav'>
        <a href='/'>Home</a>
        <a href='/departments/new'>Create Department</a>
      </div>

      {/*run renderDepartments method to generate list of departments in page*/}
      {renderDepartments()}


    </div>
  )

}

export default Departments