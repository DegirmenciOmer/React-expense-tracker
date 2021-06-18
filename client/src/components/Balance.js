import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'

export default function Balance() {
  const { transactions } = useContext(GlobalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  console.log(amounts)
  const total = amounts.reduce((acc, amount) => (acc += amount), 0).toFixed(2)

  console.log(total)
  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  )
}
