import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
  transactions: [],
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
