import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Save, DollarSign, Calendar, Tag, FileText, ArrowLeft } from 'lucide-react';

const EditExpense = ({ expense }) => {
    const [formData, setFormData] = useState({
        description: expense.description,
        amount: expense.amount,
        date: expense.date,
        category: expense.category,
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

        // Send the request to Laravel
        Inertia.put(`/expenses/${expense.id}`, formData, {
            onSuccess: () => {
                Inertia.visit('/expenses');
            },
            onError: (errors) => {
                console.log('Error al actualizar:', errors);
            },
        });
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Edit Expense</h1>
                    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                <div className="flex items-center">
                                    <FileText className="mr-2 h-5 w-5 text-gray-500" />
                                    Description
                                </div>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                placeholder="Enter expense description"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
                                <div className="flex items-center">
                                    <DollarSign className="mr-2 h-5 w-5 text-gray-500" />
                                    Amount
                                </div>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="amount"
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                                placeholder="Enter amount"
                                step="0.01"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                <div className="flex items-center">
                                    <Calendar className="mr-2 h-5 w-5 text-gray-500" />
                                    Date
                                </div>
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                                <div className="flex items-center">
                                    <Tag className="mr-2 h-5 w-5 text-gray-500" />
                                    Category
                                </div>
                            </label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                name="category"
                                value={formData.category}
                                onChange={handleInputChange}
                            >
                                <option value="">Select Category</option>
                                <option value="food">Food</option>
                                <option value="transport">Transport</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="shopping">Shopping</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                                onClick={() => Inertia.visit('/expenses')}
                            >
                                <ArrowLeft className="mr-2 h-5 w-5" />
                                Go Back
                            </button>
                            <button
                                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                                type="submit"
                            >
                                <Save className="mr-2 h-5 w-5" />
                                Update Expense
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default EditExpense;

