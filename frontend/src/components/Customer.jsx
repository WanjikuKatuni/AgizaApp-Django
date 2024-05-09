import React from 'react'

function Customer({customer, onDelete}) {
    // Format date
    const formattedDate = new Date(customer.created_at).toLocaleDateString("en-US")


  return (
        <tr>
        <th scope='row'>{customer.id}</th>
        <td className='customer-name'>{customer.customerName}</td>
        <td className='customer-code'>{customer.customerCode}</td>
        <td className='customer-phonenumber'>{customer.phonenumber}</td>
        <td className='customer-date'>{formattedDate}</td>
        <td className='createdby'>{customer.created_by}</td>

        <button className='delete-button' onClick={() => onDelete(customer.id)}>
            Add Order
        </button>
        <button className='delete-button' onClick={() => onDelete(customer.id)}>
            Delete Client
        </button>
        
        </tr>
  )
}

export default Customer