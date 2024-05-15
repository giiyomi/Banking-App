import { useState } from "react";
import './AddExpense.css';

function AddExpense(props){
    const {handleAddExpenses, newId} = props;
    const [expense, setExpen] = useState('');
    const [expenseCost, setExpenseCost] = useState('');

    const addExpenseHandler = (event) => {
        event.preventDefault();

        const newExpenseObject = {
            expense_name: expense,
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
                <input className="expenseInput" value={expense} placeholder="Expense name" onChange={(event) => setExpen(event.target.value)} required></input>
                <input type="number" className="expenseInput" value={expenseCost} placeholder="Expense cost " onChange={(event) => setExpenseCost(event.target.value)} required min={1} onKeyDown={(event) => ["e","E"].includes(event.key) && event.preventDefault()}></input>
                <button className="expenseButtons">Add</button>
            </form>
        </div>
        
    );
}

export default AddExpense;