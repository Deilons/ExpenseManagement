import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const CreateExpense = () => {
    const [formData, setFormData] = useState({
        description: '',
        amount: '',
        date: '',
        category: '',  // Agregar campo de categoría
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

        // Enviar la solicitud de creación a Laravel
        Inertia.post('/expenses', formData, {
            onSuccess: () => {
                // Redirigir a la página de índice después de la creación exitosa
                Inertia.visit('/expenses');
            },
        });
    };

    return (
        <div>
            <h1>Create Expense</h1>
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
                <div>
                    <label>Category</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                    >
                        <option value="">Select Category</option>
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="shopping">Shopping</option>
                    </select>
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default CreateExpense;
