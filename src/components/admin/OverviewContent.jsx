import React from 'react';
import { Users, Building, Lightbulb, CheckSquare, Activity } from 'lucide-react';
import StatCard from './StatCard';

const OverviewContent = ({ stats, recentActivity }) => (
  <div className="space-y-6">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard title="Total Users" value={stats.totalUsers} change={12} icon={Users} color="blue" />
      <StatCard title="Total Apartments" value={stats.totalApartments} change={8} icon={Building} color="green" />
      <StatCard title="Active Devices" value={stats.onlineDevices} change={-3} icon={Lightbulb} color="yellow" />
      <StatCard title="Active Tasks" value={stats.activeTasks} change={15} icon={CheckSquare} color="blue" />
    </div>

    {/* Charts Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Device Status Overview</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Online Devices</span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">{stats.onlineDevices}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${(stats.onlineDevices / stats.totalDevices) * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Offline Devices</span>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">{stats.offlineDevices}</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-red-600 h-2 rounded-full"
              style={{ width: `${(stats.offlineDevices / stats.totalDevices) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Task Status</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Completed Today</span>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">145</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Active Tasks</span>
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{stats.activeTasks}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">Overdue Tasks</span>
            <span className="text-sm font-medium text-red-600 dark:text-red-400">{stats.overdueTasks}</span>
          </div>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Activity</h3>
        <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          View all
        </button>
      </div>
      <div className="space-y-3">
        {recentActivity.map(activity => (
          <div
            key={activity.id}
            className="flex items-center space-x-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <Activity className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            <div className="flex-1">
              <p className="text-sm text-gray-900 dark:text-gray-100">{activity.action}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default OverviewContent;