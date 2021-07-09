import React, { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext)

  const [text, setText] = useState('')
  const [amount, setAmount] = useState('')
  const [isExpense, setIsExpense] = useState('Income')
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

    //-Math.abs()
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type='radio'
            checked={isExpense === 'Income'}
            value='Income'
            onChange={(e) => setIsExpense(e.target.value)}
          />
          <label className='radio-input'>Income</label>
          <input
            type='radio'
            checked={isExpense === 'Expense'}
            value='Expense'
            onChange={(e) => setIsExpense(e.target.value)}
          />
          <label className='radio-input'>Expense</label>
        </p>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              isExpense === 'Income'
                ? 'Enter Income Details...'
                : 'Enter Expense Details...'
            }
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
            onChange={(e) =>
              setAmount(
                isExpense === 'Income'
                  ? e.target.value
                  : -Math.abs(e.target.value)
              )
            }
            placeholder={
              isExpense === 'Income'
                ? 'Enter Income Amount...'
                : 'Enter Expense Amount...'
            }
            required
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  )
}
