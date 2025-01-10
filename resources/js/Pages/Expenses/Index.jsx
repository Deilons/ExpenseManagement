import React from 'react';

const ExpensesIndex = ({ expenses, totalExpenses, percentages }) => {
    console.log(expenses); // Verifica que los datos son correctos

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
                        <th>Category</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(expenses) && expenses.map((expense) => (
                        <tr key={expense.id}>
                            <td>{expense.date}</td>
                            <td>{expense.category}</td>
                            <td>{expense.description}</td>
                            <td>{expense.amount}</td>
                            <td></td>
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
