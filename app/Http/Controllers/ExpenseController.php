<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Expense;
use Inertia\Inertia;

class ExpenseController extends Controller
{
    // display all expenses and percentages
    public function index()
    {
        $expenses = Expense::orderBy('date', 'desc')->get()->toArray(); // Convertir a array
    
        // Calculate total expenses
        $totalExpenses = $expenses ? array_sum(array_column($expenses, 'amount')) : 0; // Sumar montos
        $percentages = Expense::calculatePercentage(); // Asumimos que esto devuelve un array con porcentajes
    
        return Inertia::render('Expenses/Index', [
            'expenses' => $expenses,
            'totalExpenses' => $totalExpenses,
            'percentages' => $percentages,
        ]);
    }

    // create new expense
    public function create()
    {
        return Inertia::render('Expenses/Create');
    }

    // store new expense
    public function store(Request $request)
    {   
        //validate request
        $validated = $request->validate([
            'description' => 'required',
            'amount' => 'required|numeric',
            'category' => 'required',
            'date' => 'required|date',
        ]);

        Expense::create($validated);

        //redirect to index
        return Inertia::location('/expenses');
    }

    // edit expense
    public function edit($id)
    {   
        $expense = Expense::findOrFail($id);

        return Inertia::render('Expenses/Edit', [
            'expense' => $expense,
        ]);
    }

    // update expense
    public function update(Request $request, Expense $expense)
    {
        // Validate request
        $validated = $request->validate([
            'description' => 'required|string|max:255',
            'amount' => 'required|numeric',
            'date' => 'required|date',
        ]);
    
        // Update expense
        $expense->update($validated);
    
        // Go to index
        return Inertia::location('/expenses');
    }
    
    

    // delete expense
    public function destroy(Expense $expense)
    {
        $expense = Expense::findOrFail($expense->id);

        $expense->delete();

        return redirect()->route('expenses.index')
                        ->with('success', 'Expense deleted successfully');
    }
}
