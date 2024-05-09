import React from 'react'
import { useNavigate } from 'react-router-dom'

function Customer({customer, onDelete}) {
    // Format date
    const formattedDate = new Date(customer.created_at).toLocaleDateString("en-US")

    const navigate = useNavigate()

    // navigate to customerorderlist/details of each customer
    const checkOrder = () => {
        navigate(`/customers/details/${customer.id}`)
    }


  return (
        <tr>
        <th scope='row'>{customer.id}</th>
        <td className='customer-name'>{customer.customerName}</td>
        <td className='customer-code'>{customer.customerCode}</td>
        <td className='customer-phonenumber'>{customer.phonenumber}</td>
        <td className='customer-date'>{formattedDate}</td>
        <td className='createdby'>{customer.created_by}</td>

        <button className='addorder-button' onClick={checkOrder}>
            Check Orders
        </button>
        <button className='delete-button' onClick={() => onDelete(customer.id)}>
            Delete Client
        </button>
        
        </tr>
  )
}

export default Customer