import React from 'react'

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
              <p>Department Inventory</p>
              <input type='integer' name='department[inventory]'/>
              <p>Name of Item</p>
              <input type='text' name='department[item]'/>
              <button type='submit'>Submit</button>
            </form>
      </div>
    </div>
  )
}


export default DepartmentNew