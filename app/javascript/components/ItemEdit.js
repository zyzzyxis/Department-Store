import React from 'react'

const ItemEdit = (props) =>{
  return(
    <div className="main">
      <h1>Edit This Item</h1>
      <p>Item id: {props.item.id}, Department {props.department.id}</p>
      <div className="nav">
      <a href={`/departments/${props.department.id}/items/${props.item.id}`}>View this Item</a>
      <a href={`/departments/${props.department.id}`}>Return to Department</a>
      </div>
      <div className="inputForm">
        {/*Form for user to edit current item in current department, fills in fields with current information */}
        <form action={`/departments/${props.department.id}/items/${props.item.id}`} method='post'>
          <h2>Item Quantity</h2>
          <input type="hidden" name="_method" value="put"/>
          <input type="number" defaultValue={props.item.quantity} name='item[quantity]'/>
  
          <h2>Item Comment</h2>
          <input type="text" defaultValue={props.item.comment} name='item[comment]'/>
  
          <button type='submit'>Update Item</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default ItemEdit 