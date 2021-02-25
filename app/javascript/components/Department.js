import React from 'react'

const Department = (props) => {
  
  const renderItems = () =>{
    return props.items.map( item =>{
      return(
        <div className="item-container">
        <div classname="item-content">
        <p>Quantity {item.quantity}</p>
        <p>Comment: {item.comment}</p>
        <hr class="itemSeparator"></hr>
        </div>
        
        {/* <a href={`/notes/${note.id}/edit`}>Edit</a>
        <a href={`/notes/${note.id}`} data-method='delete'>Delete note</a> */}
     </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>Department {props.department.id}</h1>
        <div className='nav'>
          <a href='/departments'>Return to All Departments</a>          
        </div>
        
        <p>Items in current department: </p>

        {renderItems()}
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
    </div>
  )
}

export default Department