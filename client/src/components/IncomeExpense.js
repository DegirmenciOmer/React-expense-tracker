import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'


export default function IncomeExpense() {
  const { transactions } = useContext(GlobalContext)
const amounts  = transactions.map(transaction=>transaction.amount)
const expenses = amounts.filter(amount=>amount<0).reduce((acc, amount)=> (acc-=amount),0).toFixed(2)
const income = amounts.filter(amount=>amount>0).reduce((acc, amount)=> (acc+=amount),0).toFixed(2)


  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>{expenses}</p>
      </div>
    </div>
  )
}
