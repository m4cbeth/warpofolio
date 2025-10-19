"use client";

import { useAtom } from 'jotai';
import {
  goalsAtom,
  newGoalAtom,
  addGoalAtom,
  removeGoalAtom,
  totalMonthlySavingsAtom,
  type Goal
} from '@/data/atoms/goal-planner-atoms';
import CurrencyInput from 'react-currency-input-field';

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });
};

export default function GoalBasedSavingsPlannerPage() {
  const [goals] = useAtom(goalsAtom);
  const [newGoal, setNewGoal] = useAtom(newGoalAtom);
  const [, addGoal] = useAtom(addGoalAtom);
  const [, removeGoal] = useAtom(removeGoalAtom);
  const [totalMonthlySavings] = useAtom(totalMonthlySavingsAtom);

  const calculateMonthlySavings = (goal: Goal) => {
    const targetAmount = goal.targetAmount === '' ? 0 : Number(goal.targetAmount) || 0;
    const targetDate = new Date(goal.targetDate);
    const today = new Date();
    const monthsRemaining = Math.max(1, (targetDate.getFullYear() - today.getFullYear()) * 12 +
      (targetDate.getMonth() - today.getMonth()));

    return Math.ceil(targetAmount / monthsRemaining);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600 dark:text-red-400";
      case "medium": return "text-yellow-600 dark:text-yellow-400";
      case "low": return "text-green-600 dark:text-green-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">Goal-Based Savings Planner</h1>
      <p className="mb-8 text-slate-600 dark:text-slate-300">
        Plan and track your savings progress for major financial goals like buying a home or funding education.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Total Monthly Savings Required</h3>
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              ${totalMonthlySavings.toLocaleString()}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Across {goals.length} goal{goals.length !== 1 ? 's' : ''}
            </p>
          </div>
          <h2 className="text-xl font-semibold">Add New Goal</h2>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 space-y-4">
            <div>
              <label className="block font-medium mb-2" htmlFor="goal-name">
                Goal Name
              </label>
              <input
                id="goal-name"
                type="text"
                value={newGoal.name}
                onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                placeholder="e.g., Vacation, Car, Education"
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="target-amount">
                Target Amount ($)
              </label>
              <CurrencyInput
                id="target-amount"
                name="target-amount"
                prefix="$"
                value={newGoal.targetAmount}
                placeholder="Please enter your target amount"
                allowDecimals={false}
                onValueChange={(value: string | undefined) => setNewGoal({ ...newGoal, targetAmount: value || '' })}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="target-date">
                Target Date
              </label>
              <input
                id="target-date"
                type="date"
                value={newGoal.targetDate}
                onChange={(e) => setNewGoal({ ...newGoal, targetDate: e.target.value })}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              />
            </div>

            <div>
              <label className="block font-medium mb-2" htmlFor="priority">
                Priority
              </label>
              <select
                id="priority"
                value={newGoal.priority}
                onChange={(e) => setNewGoal({ ...newGoal, priority: e.target.value as Goal["priority"] })}
                className="border rounded px-3 py-2 w-full dark:bg-slate-800 dark:border-slate-700"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>

            <button
              onClick={() => addGoal()}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            >
              Add Goal
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Your Goals</h2>

          {goals.length === 0 ? (
            <div className="text-center py-8 text-slate-500 dark:text-slate-400">
              No goals yet. Add your first goal to get started!
            </div>
          ) : (
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{goal.name}</h3>
                    <button
                      onClick={() => removeGoal(goal.id)}
                      className="text-red-500 hover:text-red-700 dark:hover:text-red-400"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Target Amount:</span>
                      <div className="font-medium">${(goal.targetAmount === '' ? 0 : Number(goal.targetAmount) || 0).toLocaleString()}</div>
                    </div>

                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Target Date:</span>
                      <div className="font-medium">{formatDate(goal.targetDate)}</div>
                    </div>

                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Priority:</span>
                      <div className={`font-medium ${getPriorityColor(goal.priority)}`}>
                        {goal.priority.charAt(0).toUpperCase() + goal.priority.slice(1)}
                      </div>
                    </div>

                    <div>
                      <span className="text-slate-600 dark:text-slate-400">Monthly Savings:</span>
                      <div className="font-medium text-blue-600 dark:text-blue-400">
                        ${calculateMonthlySavings(goal).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      Months remaining: {Math.max(1, Math.ceil((new Date(goal.targetDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24 * 30)))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}