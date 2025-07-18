import React from 'react';

const StatCard = ({ title, value, change, icon: Icon, color = 'blue' }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
        <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
        {change && (
          <p className={`text-sm mt-1 ${change > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {change > 0 ? '+' : ''}{change}% from last month
          </p>
        )}
      </div>
      <div className={`p-3 rounded-lg bg-${color}-50 dark:bg-${color}-900`}>
        <Icon className={`w-6 h-6 text-${color}-600 dark:text-${color}-300`} />
      </div>
    </div>
  </div>
);

export default StatCard;