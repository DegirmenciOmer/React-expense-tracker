import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

const DeleteTransaction = ({ id }) => {
  const { deleteTransaction } = useContext(GlobalContext)

  return (
    <button onClick={() => deleteTransaction(id)} className='delete-btn'>
      x
    </button>
  )
}

export default DeleteTransaction
