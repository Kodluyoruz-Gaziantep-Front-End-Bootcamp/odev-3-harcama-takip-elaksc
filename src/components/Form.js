import React, { useState } from 'react';
import { uniqueId } from '../utils';
import Card from '@mui/material/Card';


function Form({ onNewTransaction }) {
    const [nameValue, setNameValue] = useState('');
    const [amountValue, setAmountValue] = useState('');

    const addTransaction = (type, evt) => {
        evt.preventDefault();

        const data = { id: uniqueId(), name: nameValue, 
                amount: parseInt(amountValue), type: type };

        onNewTransaction(data);

        setNameValue('');
        setAmountValue('');
    }

    return (
        <Card className='card'>
        <div>
            <h2>Add New Transactions</h2>
            <form className='transaction-form'>
                <label>
                    <div>
                        <input type="text" value={nameValue}
                            onChange={(e) => setNameValue(e.target.value)}
                            placeholder="  Income" />
                    </div>
                </label>
                <label>
                    
                    <div>
                        <input type="number" value={amountValue}
                            onChange={(e) => setAmountValue(e.target.value)}
                            placeholder = "  Price" />
                    </div>
                </label>
                <div>
                    <button className='income-btn' onClick={(e) => addTransaction('income', e)}>Add Income</button>
                    <button className='expense-btn' onClick={(e) => addTransaction('expense', e)}>Add Expense</button>
                </div>
            </form>
        </div>
        </Card>
    )
}

export default Form;


