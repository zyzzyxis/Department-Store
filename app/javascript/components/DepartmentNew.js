import React from 'react'

def DepartmentNew {
  return(
    <div className="main">
      <h1>Create A Department</h1>
      {/* <p>Department id: {props.department.id}</p> */}
      <div className="nav">
      <a href={`/departments/`}>Return to Departments</a>
      </div>
      <div className="inputForm">
        {/* <form action={`/departments/${props.department.id}`} method='post'>
          <input type="hidden" name="_method" value="put"/> */}
          {/* <h2>Department item</h2>
          <input type="text" defaultValue={props.department.item} name='department[item]'/>
  
          <h2>Department Inventory</h2>
          <input type="number" defaultValue={props.department.inventory} name='department[inventory]'/>
  
          <button type='submit'>Create Department</button>
          <button type='reset'>Reset</button> */}
        <h1>Enter your new note here:</h1>
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