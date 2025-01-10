import React from 'react';
import { Inertia } from '@inertiajs/inertia';

const ExpensesIndex = ({ expenses, totalExpenses, percentages }) => {
    console.log(expenses); 

    // handle delete
    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this expense?')) {
            Inertia.delete(`/expenses/${id}`);
        }
    };

    return (
        <div>
            <h1>Expenses Index</h1>

            <p>
                This is the expenses index page. You can add, edit, and delete
                expenses here.
            </p>

            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(expenses) && expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td>
                                {/* edit button */}
                                <button onClick={() => Inertia.visit(`/expenses/${expense.id}/edit`)}>Edit</button>
                                
                                {/* delete button */}
                                <button onClick={() => handleDelete(expense.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="total-expenses">
                <h2>Your total expenses: ${totalExpenses.toFixed(2)}</h2>

                <h3>Expense categories percentages:</h3>
                <ul>
                    {percentages && Object.keys(percentages).map((category, index) => (
                        <li key={index}>
                            {category}: {percentages[category].toFixed(2)}%
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExpensesIndex;
