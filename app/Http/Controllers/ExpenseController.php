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
        $expenses = Expense::orderBy('date', 'desc')->get();

        // calculate total expenses
        $totalExpenses = $expenses->sum('amount');
        $percentages = Expense::calculatePercentage();

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
        $request->validate([
            'description' => 'required',
            'amount' => 'required|numeric',
            'category' => 'required',
            'date' => 'required|date',
        ]);

        Expense::create($request->all());

        //redirect to index
        return redirect()->route('expenses.index')
                        ->with('success', 'Expense created successfully');
    }

    // edit expense
    public function edit(Expense $expense)
    {
        return Inertia::render('Expenses/Edit', [
            'expense' => $expense,
        ]);
    }

    // update expense
    public function update(Request $request, Expense $expense)
    {   
        //validate request
        $request->validate([
            'description' => 'required',
            'amount' => 'required|numeric',
            'category' => 'required',
            'date' => 'required|date',
        ]);

        $expense->update($request->all());

        //redirect to index
        return redirect()->route('expenses.index')
                        ->with('success', 'Expense updated successfully');
    }

    // delete expense
    public function destroy(Expense $expense)
    {
        $expense->delete();

        return redirect()->route('expenses.index')
                        ->with('success', 'Expense deleted successfully');
    }
}
