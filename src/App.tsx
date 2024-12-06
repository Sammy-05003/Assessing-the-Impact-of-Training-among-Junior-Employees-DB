import React from 'react';
import { Users, TrendingUp, ShieldCheck, Brain } from 'lucide-react';
import StatCard from './components/StatCard';
import TrainingChart from './components/TrainingChart';
import { monthlyData, stats } from './data/trainingData';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Training Impact Assessment Dashboard
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Analyzing the effectiveness of training programs among IT staff
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Employees"
            value={stats.totalEmployees.toLocaleString()}
            icon={Users}
            description="IT staff members in training program"
          />
          <StatCard
            title="Productivity Increase"
            value={`${stats.productivityIncrease}%`}
            icon={TrendingUp}
            description="Improvement in overall productivity"
          />
          <StatCard
            title="Cyber Attacks Reduced"
            value={`${stats.attacksReduced}%`}
            icon={ShieldCheck}
            description="Reduction in successful cyber attacks"
          />
          <StatCard
            title="Training Completion"
            value="100%"
            icon={Brain}
            description="Employees completed training modules"
          />
        </div>

        <TrainingChart data={monthlyData} />

        <div className="mt-8 bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Findings</h2>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
              <p>Continuous personal development program implemented across 5,400+ IT staff members</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
              <p>Significant correlation observed between training completion and reduction in cyber attacks</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
              <p>68% improvement in productivity through targeted training materials</p>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 mr-2"></span>
              <p>Microsoft Office tools utilized effectively for creating and distributing training materials</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;