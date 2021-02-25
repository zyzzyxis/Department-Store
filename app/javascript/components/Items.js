import React from 'react'

const Items = (props) => {
  
  const renderItems = () =>{
    //map through all items in specific department, generate data for each in page
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
          <a href={`/departments/${props.department.id}/items/${item.id}/edit`}>Edit this item</a>
        </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>Items - Department {props.department.id}</h1>
        <div className='nav'>
          <a href='/departments'>All Departments</a>  
          <a href={`/departments/${props.department.id}/items/new`}>Add a New Item to this Department</a>  
          <a href={`/departments/${props.department.id}/edit`}>Edit this Department</a> 
          <a href={`/departments/${props.department.id}/`} data-method='delete'>Delete this Department</a>
          
        </div>

        {renderItems()}

    </div>
  )
}

export default Items