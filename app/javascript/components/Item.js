import React from 'react'

//fill page with the single item from specified department: /departments/[department_id]/items/[item_id]
const Item = (props) => {
  
  return (
    <div className='main'>
      <h1>Item {props.item.id}</h1>
        <div className='nav'>
          <a href={`/departments`}>All Departments</a>
          <a href={`/departments/${props.department.id}/items`}>Return to Items in Department {props.department.id}</a>
        </div>
      <div className="item-container">
        <div className="item-content">
          <h1>Quantity: {props.item.quantity}</h1>
          <p>Comment: {props.item.comment}</p>
        </div>
        
        <a href={`/departments/${props.department.id}/items/${props.item.id}/edit`}>Edit item</a>
        <a href={`/departments/${props.department.id}/items/${props.item.id}`} data-method='delete'>Delete item</a>
      </div>
    </div>
  )
}

export default Item