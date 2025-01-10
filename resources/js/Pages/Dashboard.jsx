import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { DollarSign, PieChart, PlusCircle, List } from 'lucide-react';

const Dashboard = ({ auth }) => {
    return (
        <AuthenticatedLayout  >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <h1 className="text-3xl font-bold mb-6">Welcome to Your Expense Manager, {auth.user.name}!</h1>
                            
                            <p className="mb-8 text-lg">
                                Track, manage, and analyze your expenses with ease. Get started by adding your first expense or viewing your existing expenses.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6">
                                <Link
                                    href="/expenses/create"
                                    className="block p-6 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition duration-300"
                                >
                                    <div className="flex items-center mb-2">
                                        <PlusCircle className="h-6 w-6 text-indigo-600 mr-2" />
                                        <h2 className="text-xl font-semibold text-indigo-600">Add New Expense</h2>
                                    </div>
                                    <p>Quickly add a new expense to your tracker.</p>
                                </Link>

                                <Link
                                    href="/expenses"
                                    className="block p-6 bg-green-100 rounded-lg hover:bg-green-200 transition duration-300"
                                >
                                    <div className="flex items-center mb-2">
                                        <List className="h-6 w-6 text-green-600 mr-2" />
                                        <h2 className="text-xl font-semibold text-green-600">View Expenses</h2>
                                    </div>
                                    <p>See a list of all your recorded expenses.</p>
                                </Link>

                                <div className="block p-6 bg-yellow-100 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <PieChart className="h-6 w-6 text-yellow-600 mr-2" />
                                        <h2 className="text-xl font-semibold text-yellow-600">Expense Analysis</h2>
                                    </div>
                                    <p>Gain insights into your spending habits with detailed charts and breakdowns.</p>
                                </div>

                                <div className="block p-6 bg-red-100 rounded-lg">
                                    <div className="flex items-center mb-2">
                                        <DollarSign className="h-6 w-6 text-red-600 mr-2" />
                                        <h2 className="text-xl font-semibold text-red-600">Budget Planning</h2>
                                    </div>
                                    <p>Set budgets and track your progress towards financial goals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;

