import React from 'react'

const ItemNew = (props) =>{
  return(
    <div className="main">
      <h1>Create an Item</h1>
      <p>Department {props.department.id}</p>
      <div className="nav">
        <a href={`/departments/${props.department.id}`}>Return to Department</a>
      </div>
      <div className="inputForm">
        {/*Form for user to create item in current department, fills in fields with current information */}
        <form action={`/departments/${props.department.id}/items`} method='post'>
          <h2>Item Quantity</h2>
          <input type="hidden" name="_method" value="post"/>
          <input type="number" placeholder="Enter Quantity Here" name='item[quantity]'/>
  
          <h2>Please Leave a Comment for this new Item</h2>
          <input type="text" placeholder="Enter Comment Here" name='item[comment]'/>
  
          <button type='submit'>Create Item</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default ItemNew 