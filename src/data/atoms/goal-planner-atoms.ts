import { atom } from 'jotai';

export type Goal = {
  id: string;
  name: string;
  targetAmount: number;
  targetDate: string;
  priority: "high" | "medium" | "low";
};

export type NewGoal = Omit<Goal, "id">;

export const goalsAtom = atom<Goal[]>([
  {
    id: "1",
    name: "Emergency Fund",
    targetAmount: 10000,
    targetDate: "2025-12-31",
    priority: "high"
  },
  {
    id: "2", 
    name: "Home Down Payment",
    targetAmount: 50000,
    targetDate: "2026-06-30",
    priority: "high"
  }
]);

export const newGoalAtom = atom<NewGoal>({
  name: "",
  targetAmount: 0,
  targetDate: "",
  priority: "medium"
});

export const addGoalAtom = atom(
  null,
  (get, set) => {
    const newGoal = get(newGoalAtom);
    if (newGoal.name && newGoal.targetAmount > 0 && newGoal.targetDate) {
      const goal: Goal = {
        id: new Date().getTime().toString(),
        ...newGoal
      };
      const currentGoals = get(goalsAtom);
      set(goalsAtom, [...currentGoals, goal]);
      set(newGoalAtom, { name: "", targetAmount: 0, targetDate: "", priority: "medium" });
    }
  }
);

export const removeGoalAtom = atom(
  null,
  (get, set, goalId: string) => {
    const currentGoals = get(goalsAtom);
    set(goalsAtom, currentGoals.filter(goal => goal.id !== goalId));
  }
);

export const totalMonthlySavingsAtom = atom((get) => {
  const goals = get(goalsAtom);
  return goals.reduce((sum, goal) => {
    const targetDate = new Date(goal.targetDate);
    const today = new Date();
    const monthsRemaining = Math.max(1, (targetDate.getFullYear() - today.getFullYear()) * 12 + 
      (targetDate.getMonth() - today.getMonth()));
    
    return sum + Math.ceil(goal.targetAmount / monthsRemaining);
  }, 0);
});
