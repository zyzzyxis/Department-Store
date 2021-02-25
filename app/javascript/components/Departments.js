import React from 'react'

const Departments = (props) =>{

  const renderDepartments = () => {
    return props.departments.map( department => {
      return(
        <div className="item-container">
          <div className="item-content">
            <p>Department {department.id}</p>
            <p>Item: {department.item}</p>
            <p>Inventory: {department.inventory}</p>
            <hr className="itemSeparator"></hr>
          </div>

          <a href={`/departments/${department.id}/items`}>Open Department</a>
          
        </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>All Departments </h1>
      <div className='nav'>
        <a href='/'>Home</a>
      </div>


      {renderDepartments()}


    </div>
  )
}

export default Departments