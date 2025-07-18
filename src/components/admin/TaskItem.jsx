import React from 'react';
import { CheckSquare } from 'lucide-react';

const TaskItem = ({ title, status, device, scheduledTime, type }) => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-sm transition-shadow">
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-lg ${
        status === 'completed' ? 'bg-green-50 dark:bg-green-900/20' : 
        status === 'pending' ? 'bg-yellow-50 dark:bg-yellow-900/20' : 'bg-red-50 dark:bg-red-900/20'
      }`}>
        <CheckSquare className={`w-5 h-5 ${
          status === 'completed' ? 'text-green-600 dark:text-green-400' : 
          status === 'pending' ? 'text-yellow-600 dark:text-yellow-400' : 'text-red-600 dark:text-red-400'
        }`} />
      </div>
      <div>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{device} • {type}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span className="text-sm text-gray-500 dark:text-gray-400">{scheduledTime}</span>
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' : 
        status === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' : 
        'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
      }`}>
        {status}
      </span>
    </div>
  </div>
);

export default TaskItem;