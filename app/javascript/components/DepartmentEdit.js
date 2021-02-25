import React from 'react'

const DepartmentEdit = (props) =>{
  return(
    <div className="main">
      <h1>Edit This Department</h1>
      <p>Department id: {props.department.id}</p>
      <div className="nav">
        <a href={`/departments/${props.department.id}`}>Return to Department</a>
      </div>
      {/*Form for user to edit current department, fills in fields with current information */}
      <div className="inputForm">
        <form action={`/departments/${props.department.id}`} method='post'>
          <input type="hidden" name="_method" value="put"/>
          <h2>Department item</h2>
          <input type="text" defaultValue={props.department.item} name='department[item]'/>
  
          <h2>Department Current Inventory</h2>
          <input type="number" defaultValue={props.department.inventory} name='department[inventory]'/>
  
          <button type='submit'>Update Department</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default DepartmentEdit 