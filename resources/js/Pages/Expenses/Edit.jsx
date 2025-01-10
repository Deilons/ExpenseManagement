import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const EditExpense = ({ expense }) => {
    const [formData, setFormData] = useState({
        date: expense.date,
        description: expense.description,
        amount: expense.amount,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        Inertia.put(`/expenses/${expense.id}`, formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            <h1>Edit Expense</h1>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Amount:</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditExpense;
