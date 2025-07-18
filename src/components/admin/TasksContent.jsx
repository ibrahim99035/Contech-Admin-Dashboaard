import React from 'react';
import { Plus, CheckSquare, Activity, AlertCircle, Calendar } from 'lucide-react';
import StatCard from './StatCard';
import TaskItem from './TaskItem';

const TasksContent = ({ stats }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Task Management</h2>
        <p className="text-gray-600 dark:text-gray-400">Manage automation tasks and schedules</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
        <Plus className="w-4 h-4" />
        <span>Create Task</span>
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <StatCard title="Active Tasks" value={stats.activeTasks} icon={CheckSquare} color="blue" />
      <StatCard title="Completed Today" value="145" icon={Activity} color="green" />
      <StatCard title="Overdue" value={stats.overdueTasks} icon={AlertCircle} color="red" />
      <StatCard title="Scheduled" value="234" icon={Calendar} color="purple" />
    </div>

    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
      <div className="p-6 border-b border-gray-100 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Tasks</h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200">All</button>
            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200">Active</button>
            <button className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 dark:text-gray-200">Overdue</button>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <TaskItem title="Turn off all lights" status="completed" device="Living Room Light" scheduledTime="2 hours ago" type="One-time" />
        <TaskItem title="Morning routine" status="pending" device="Multiple devices" scheduledTime="6:00 AM" type="Daily" />
        <TaskItem title="Lock all doors" status="overdue" device="Front Door Lock" scheduledTime="10:00 PM" type="Daily" />
        <TaskItem title="Adjust thermostat" status="completed" device="Main Thermostat" scheduledTime="1 hour ago" type="Scheduled" />
      </div>
    </div>
  </div>
);

export default TasksContent;