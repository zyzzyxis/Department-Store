import React from 'react'

//Generate form for user to create new department
const DepartmentNew = (props) =>{
  return(
    <div className="main">
      {/* <p>Department id: {props.department.id}</p> */}
      <div className="nav">
      <a href={`/departments/`}>Return to Departments</a>
      </div>
      <div className="inputForm">
        <h1>Create A New Department Below</h1>
            <form action='/departments' method='post'>
              <p>Name of Item</p>
              <input type='text' name='department[item]'/>
              <p>Department Inventory</p>
              <input type='number' name='department[inventory]'/>
              <button type='submit'>Submit</button>
            </form>
      </div>
    </div>
  )
}


export default DepartmentNew