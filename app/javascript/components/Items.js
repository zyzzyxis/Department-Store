import React from 'react'

const Items = (props) => {
  
  const renderItems = () =>{
    return props.items.map( item =>{
      return(
        <div className="item-container">
        <div classname="item-content">
        <p>Quantity {item.quantity}</p>
        <p>Comment: {item.comment}</p>
        <hr class="itemSeparator"></hr>
        </div>
        
        <a href={`/departments/${props.department.id}`}>Return to Department {props.department.id}</a>
        {/* <a href={`/notes/${note.id}/edit`}>Edit</a>
        <a href={`/notes/${note.id}`} data-method='delete'>Delete note</a> */}
     </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>Items</h1>
        <div className='nav'>
          <a href='/departments'>Return to All Departments</a>
        </div>

        {renderItems()}
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
    </div>
  )
}

export default Items