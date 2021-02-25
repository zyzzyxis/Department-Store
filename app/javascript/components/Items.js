import React from 'react'

const Items = (props) => {
  const renderItems = () =>{
      return props.items.map( item => {
          return (
            <div className="item-container">
              <div id="item-content">
                <h1>Quantity: {props.item.quantity}</h1>
                <p>Comment: {props.item.comment}</p>
                <hr class="itemSeparator"></hr>
              </div>
                  
                {/* <a href={`/items/${note.id}`}>Open</a>
                <a href={`/items/${note.id}/edit`}>Edit</a>
                <a href={`/items/${note.id}`} data-method='delete'>Delete note</a> */}
            </div>
          )
      })
  }

  return(
      <div id='main'>
          <h1>Items</h1>
          <div id='nav'>
              {/* <a href={`/items/new`}>New Note Form</a> */}
          </div>
          {renderItems()}
      </div>   
  )
}

export default Items