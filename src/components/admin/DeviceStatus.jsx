import React from 'react';
import { Lightbulb, MoreVertical } from 'lucide-react';

const DeviceStatus = ({ name, status, type, room, lastActive }) => (
  <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:shadow-sm transition-shadow">
    <div className="flex items-center space-x-3">
      <div className={`p-2 rounded-lg ${
        status === 'online' 
          ? 'bg-green-50 dark:bg-green-900/20' 
          : 'bg-red-50 dark:bg-red-900/20'
      }`}>
        <Lightbulb className={`w-5 h-5 ${
          status === 'online' 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-red-600 dark:text-red-400'
        }`} />
      </div>
      <div>
        <p className="font-medium text-gray-900 dark:text-gray-100">{name}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{type} • {room}</p>
      </div>
    </div>
    <div className="flex items-center space-x-2">
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        status === 'online' 
          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' 
          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
      }`}>
        {status}
      </span>
      <button className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
        <MoreVertical className="w-4 h-4 text-gray-400 dark:text-gray-300" />
      </button>
    </div>
  </div>
);

export default DeviceStatus;