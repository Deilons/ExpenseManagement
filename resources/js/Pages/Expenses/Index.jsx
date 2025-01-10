import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PlusCircle, Edit2, Trash2, DollarSign, PieChart } from 'lucide-react';

const ExpensesIndex = ({ expenses, totalExpenses, percentages }) => {
    console.log(expenses);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this expense?')) {
            Inertia.delete(`/expenses/${id}`);
        }
    };

    return (
        <AuthenticatedLayout>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">Expense Management</h1>
                    
                    <p className="mb-4 text-gray-600">
                        Manage your expenses efficiently. Add, edit, and delete expenses as needed.
                    </p>
                    
                    <button 
                        onClick={() => Inertia.visit('/expenses/create')}
                        className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PlusCircle className="mr-2 h-5 w-5" />
                        Create New Expense
                    </button>

                    <div className="overflow-x-auto bg-white shadow overflow-hidden sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {Array.isArray(expenses) && expenses.map((expense) => (
                                    <tr key={expense.id}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.date}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{expense.category}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{expense.description}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${expense.amount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <button 
                                                onClick={() => Inertia.visit(`/expenses/${expense.id}/edit`)}
                                                className="text-indigo-600 hover:text-indigo-900 mr-4"
                                            >
                                                <Edit2 className="h-5 w-5" />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(expense.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                <Trash2 className="h-5 w-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h2 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
                                <DollarSign className="mr-2 h-5 w-5 text-indigo-500" />
                                Your total expenses: ${totalExpenses.toFixed(2)}
                            </h2>

                            <h3 className="mt-6 text-lg leading-6 font-medium text-gray-900 flex items-center">
                                <PieChart className="mr-2 h-5 w-5 text-indigo-500" />
                                Expense categories percentages:
                            </h3>
                            <ul className="mt-2 divide-y divide-gray-200">
                                {percentages && Object.keys(percentages).map((category, index) => (
                                    <li key={index} className="py-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium text-gray-900">{category}</span>
                                            <span className="text-sm text-gray-500">{percentages[category].toFixed(2)}%</span>
                                        </div>
                                        <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                                            <div 
                                                className="bg-indigo-600 h-2 rounded-full" 
                                                style={{width: `${percentages[category]}%`}}
                                            ></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default ExpensesIndex;

