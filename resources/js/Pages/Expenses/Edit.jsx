import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const EditExpense = ({ expense }) => {
    const [formData, setFormData] = useState({
        description: expense.description,
        amount: expense.amount,
        date: expense.date,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Enviar la solicitud de actualización a Laravel
        Inertia.put(`/expenses/${expense.id}`, formData, {
            onSuccess: () => {
                // Redirigir a la página de índice después de la actualización exitosa
                Inertia.visit('/expenses');
            },
            onError: (errors) => {
                console.log('Error al actualizar:', errors);
            },
        });
    };

    return (
        <div>
            <h1>Edit Expense</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Amount</label>
                    <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Date</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default EditExpense;
