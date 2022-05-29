import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState("Income");
  const onSubmit = (e) => {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * 10000000000000);

    const newTransaction = {
      id: randomNumber,
      description,
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
    setAmount("");
    setDescription("");
  };
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <p>
          <input
            type="radio"
            checked={transactionType === "Income"}
            value="Income"
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label className="radio-input">Income</label>
          <input
            type="radio"
            checked={transactionType === "Expense"}
            value="Expense"
            onChange={(e) => setTransactionType(e.target.value)}
          />
          <label className="radio-input">Expense</label>
        </p>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder={`${
              transactionType === "Income" ? "Income" : "Expense"
            } Details...`}
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(
                transactionType === "Income"
                  ? e.target.value
                  : -Math.abs(e.target.value)
              )
            }
            placeholder={`${
              transactionType === "Income" ? "Income" : "Expense"
            } Amount...`}
            required
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
