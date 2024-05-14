import { useState } from "react";
import './AddExpense.css';

function AddExpense(props){
    const {handleAddExpenses, newId} = props;

    // declaration for the new expense 
    const [expen, setExpen] = useState('');
    const [expenseCost, setExpenseCost] = useState('');

    const addExpenseHandler = (event) => {
        event.preventDefault();

        const newExpenseObject = {
            expense_name: expen,
            expense_cost: expenseCost,
            id: newId
        }

        console.log(newExpenseObject);
        handleAddExpenses(newExpenseObject);

        setExpen('');
        setExpenseCost('');
    }

    return (
        <div className="addExpense">
            <form onSubmit={addExpenseHandler}>
                <input className="expenseInput" value={expen} placeholder="Expense name" onChange={(event) => setExpen(event.target.value)} required></input>
                <input className="expenseInput" value={expenseCost} placeholder="Expense cost " onChange={(event) => setExpenseCost(event.target.value)} required></input>
                <button className="expenseButtons">Add</button>
            </form>
        </div>
        
    );
}

export default AddExpense;