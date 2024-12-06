import { TrainingData, EmployeeStats } from '../types/data';

export const monthlyData: TrainingData[] = [
  { month: 'Jan', cyberAttacks: 48, employeesTrained: 450, productivityScore: 72 },
  { month: 'Feb', cyberAttacks: 42, employeesTrained: 900, productivityScore: 75 },
  { month: 'Mar', cyberAttacks: 38, employeesTrained: 1350, productivityScore: 79 },
  { month: 'Apr', cyberAttacks: 32, employeesTrained: 1800, productivityScore: 82 },
  { month: 'May', cyberAttacks: 28, employeesTrained: 2250, productivityScore: 85 },
  { month: 'Jun', cyberAttacks: 25, employeesTrained: 2700, productivityScore: 89 },
  { month: 'Jul', cyberAttacks: 22, employeesTrained: 3150, productivityScore: 92 },
  { month: 'Aug', cyberAttacks: 18, employeesTrained: 3600, productivityScore: 95 },
  { month: 'Sep', cyberAttacks: 15, employeesTrained: 4050, productivityScore: 98 },
  { month: 'Oct', cyberAttacks: 12, employeesTrained: 4500, productivityScore: 115 },
  { month: 'Nov', cyberAttacks: 10, employeesTrained: 4950, productivityScore: 118 },
  { month: 'Dec', cyberAttacks: 8, employeesTrained: 5400, productivityScore: 121 }
];

export const stats: EmployeeStats = {
  totalEmployees: 5400,
  trainedEmployees: 5400,
  productivityIncrease: 68,
  attacksReduced: 83
};