import React from "react";

function Expense({ expense, income }) {
  var balance = income - expense;
  if (balance < 0) {
    var hStyle = { color: "red" };
  } 
  return (
    <div>
      <br /><br/><br/>
      <h2>Balance</h2>
      <div className="balance-value" style={hStyle}>
        ${balance}
      </div>
      <div className="row expense">
        <div className="col col-income">
          <span>
            <h3>Income</h3>
            <div className="income-text">₺{income}</div>
          </span>
        </div>
        <div className="col col-expense">
          <h3>Expense</h3>
          <div className="expense-text">₺{expense}</div>
        </div>
      </div>
    </div>
  );
}

export default Expense;
