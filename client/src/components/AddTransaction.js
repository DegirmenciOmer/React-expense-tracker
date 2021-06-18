import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
    const randomNumber = Math.floor(Math.random() * 10000000000000)

    const newTransaction = {
      id: randomNumber,
      text,
      amount: parseInt(amount),
    }
    addTransaction(newTransaction)
    setAmount('')
    setText('')
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
            required
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
            required
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
