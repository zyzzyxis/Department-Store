import React from 'react'

const Item = (props) => {
  
  return (
    <div className='main'>
      <h1>Item</h1>
        <div className='nav'>
           <a href={`/departments/${props.department.id}/items`}>Return to Items</a>
           <a href={`/departments/${props.department.id}`}>Return to Department {props.department.id}</a>
        </div>
      <div className="item-container">
        <div className="item-content">
          <h1>Quantity: {props.item.quantity}</h1>
          <p>Comment: {props.item.comment}</p>
          <hr className="itemSeparator"></hr>
        </div>
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
      </div>
    </div>
  )
}

export default Item