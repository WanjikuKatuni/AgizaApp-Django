import React from 'react'

function Order({order, onDelete}) {
  // show time
  const formattedTime = new Date(order.created_at).toLocaleTimeString("en-US")

  return (
    <tr>
        <td scope='row'>{order.id}</td>
        <td className='item-name'>{order.itemName}</td>
        <td className='item-amount'>{order.itemAmount}</td>
        <td className='created-at'>{formattedTime}</td>
        <td className='created-by'>{order.created_by}</td>

        <button className='confirm-order'>
            Confirm Order
        </button>
        <button className='delete-button' onClick={() => onDelete(order.id)}>
            Delete Client
        </button>
    </tr>
  )
}

export default Order