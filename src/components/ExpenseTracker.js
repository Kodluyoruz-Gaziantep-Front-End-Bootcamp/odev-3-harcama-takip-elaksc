import React, { useState, useEffect } from "react";
import Expense from "./Expense";
import TransactionHistory from "./History";
import TransactionForm from "./Form";



function ExpenseTracker() {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactions, setTransactions] = useState([]);



  const saveState = () => {
    localStorage.setItem("expenseTrackerState", JSON.stringify(transactions));
  };

  const calculateExpenses = () => {
    let income = 0,
      expense = 0;

    transactions.forEach((data) => {
      if (data.type === "income") {
        income += data.amount;
      } else if (data.type === "expense") {
        expense += data.amount;
      }
    });

    saveState();

    setIncome(income);
    setExpense(expense);
  };

  const handleAddNewTransaction = (item) => {
    let newTransactions = [...transactions, item];
    setTransactions(newTransactions);
  };

  const handleDeleteTransaction = (id) => {
    const newTransactions = transactions.filter((item) => item.id != id);
    setTransactions(newTransactions);
  };

  useEffect(() => {
    let localState = JSON.parse(localStorage.getItem("expenseTrackerState"));
    if (localState) {
      setTransactions(localState);
    } else {
      calculateExpenses();
    }
  }, []);

  useEffect(() => {
    calculateExpenses();
  }, [transactions]);

  return (
    <div>
      <Expense income={income} expense={expense} />
      <TransactionHistory
        transactions={transactions}
        onDeleteTransaction={handleDeleteTransaction}
      />
      <TransactionForm onNewTransaction={handleAddNewTransaction} />

    </div>
  );
}
export default ExpenseTracker;
