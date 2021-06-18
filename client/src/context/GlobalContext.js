import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [
    { id: 1, text: 'Flower', amount: 20 },
    { id: 2, text: 'Salary', amount: 200 },
    { id: 3, text: 'Honey', amount: -20 },
    { id: 4, text: 'Keyboard', amount: -120 },
  ],
}
//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  //action
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE',
      payload: id,
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD',
      payload: transaction,
    })
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
