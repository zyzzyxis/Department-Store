import React from 'react'

const Items = () => {
  
  return (
    <div id='main'>
      <h1>Items</h1>
        <div id='nav'>
          <a href='/departments'>Return to Departments</a>
        </div>
        
        {/* <a href={`/items/${props.item.id}/edit`}>Edit</a>
        <a href={`/items/${props.item.id}`} data-method='delete'>Delete item</a> */}
    </div>
  )
}

export default Items