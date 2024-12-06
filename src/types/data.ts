export interface TrainingData {
  month: string;
  cyberAttacks: number;
  employeesTrained: number;
  productivityScore: number;
}

export interface EmployeeStats {
  totalEmployees: number;
  trainedEmployees: number;
  productivityIncrease: number;
  attacksReduced: number;
}