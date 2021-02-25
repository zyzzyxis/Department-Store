import React from 'react'

const Item = (props) => {
  
  return (
    <div id='main'>
      <h1>Item</h1>
        <div id='nav'>
          {/* <a href='/items'>Return to Items</a>
          <a href={`/items/new`}>New item Form</a> */}
        </div>
      <div className="item-container">
        <div id="item-content">
          <h1>Quantity: {props.item.quantity}</h1>
          <p>Comment: {props.item.comment}</p>
          <hr class="itemSeparator"></hr>
        </div>
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
      </div>
    </div>
  )
}

export default Item