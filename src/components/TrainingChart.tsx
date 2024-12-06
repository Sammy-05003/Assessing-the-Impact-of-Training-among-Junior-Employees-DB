import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrainingData } from '../types/data';

interface TrainingChartProps {
  data: TrainingData[];
}

const TrainingChart: React.FC<TrainingChartProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Training Impact Analysis</h3>
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="employeesTrained"
              stroke="#2563eb"
              name="Employees Trained"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="productivityScore"
              stroke="#16a34a"
              name="Productivity Score"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="cyberAttacks"
              stroke="#dc2626"
              name="Cyber Attacks"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TrainingChart;