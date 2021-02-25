import React from 'react'

const Items = (props) => {
  
  const renderItems = () =>{
    return props.items.map( item =>{
      return(
        <div className="item-container">
        <div className="item-content">
        <h2>Item {item.id}</h2>
        <p>Quantity {item.quantity}</p>
        <p>Comment: {item.comment}</p>
        <hr class="itemSeparator"></hr>
        </div>

        <a href={`/departments/${props.department.id}/items/${item.id}`}>Open this item</a>
        {/* <a href={`/departments/${props.department.id}/item/${note.id}/edit`}>Edit item</a>
        <a href={`/departments/${props.department.id}/item/${note.id}`} data-method='delete'>Delete item</a> */}
     </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>Items - Department {props.department.id}</h1>
        <div className='nav'>
          <a href='/departments'>All Departments</a>  
          <a href={`/departments/${props.department.id}/edit`}>Edit this Department</a> 
        </div>

        {renderItems()}
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
    </div>
  )
}

export default Items