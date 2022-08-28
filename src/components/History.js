import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
function TransactionHistory({ transactions, onDeleteTransaction }) {
  return (
    <div className="transactions-val">
      <br /><br/>
      <h2>Transaction History</h2>
      <ul className="transactions">
        {transactions.map((data) => (
          <li key={data.id}>
            <div>{data.name}</div>
            <div>
              <span>${data.amount}</span>
              <RemoveIcon onClick={() => onDeleteTransaction(data.id)}>
                x
              </RemoveIcon>
            </div>
          </li>
        ))}
        <br/>
      </ul>
    </div>
  );
}

export default TransactionHistory;
