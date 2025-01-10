<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Expense extends Model
{
    use HasFactory;

    protected $fillable = [
        'description',
        'amount',
        'category',
        'date',
    ];
    public static function calculatePercentage(){
        $totalExpenses = self::sum('amount');
        $percentages = [];

        if ($totalExpenses > 0) {
            $categories = ['food', 'transport', 'shopping', 'entertainment', 'other'];
            foreach ($categories as $category) {
                $categoryExpenses = self::where('category', $category)->sum('amount');
                $percentage = ($categoryExpenses / $totalExpenses) * 100;
                $percentages[$category] = round($percentage, 2);
            }
        }

        return $percentages;
    }
}
