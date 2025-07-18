import React from 'react';
import { Plus, Search, Filter, Lightbulb, Wifi, WifiOff, Settings } from 'lucide-react';
import StatCard from './StatCard';
import DeviceStatus from './DeviceStatus';

const DevicesContent = ({ stats, searchTerm, setSearchTerm }) => (
  <div className="space-y-6">
    <div className="flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Device Management</h2>
        <p className="text-gray-600 dark:text-gray-300">Monitor and control all connected devices</p>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
        <Plus className="w-4 h-4" />
        <span>Add Device</span>
      </button>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <StatCard title="Total Devices" value={stats.totalDevices} icon={Lightbulb} color="blue" />
      <StatCard title="Online" value={stats.onlineDevices} icon={Wifi} color="green" />
      <StatCard title="Offline" value={stats.offlineDevices} icon={WifiOff} color="red" />
      <StatCard title="Automated" value="1,456" icon={Settings} color="purple" />
    </div>

    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="p-6 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">All Devices</h3>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search devices..."
                className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 space-y-3">
        <DeviceStatus name="Living Room Light" status="online" type="Smart Light" room="Living Room" />
        <DeviceStatus name="Bedroom Fan" status="offline" type="Smart Fan" room="Bedroom" />
        <DeviceStatus name="Kitchen Thermostat" status="online" type="Thermostat" room="Kitchen" />
        <DeviceStatus name="Garage Door" status="online" type="Smart Lock" room="Garage" />
        <DeviceStatus name="Bathroom Heater" status="offline" type="Smart Heater" room="Bathroom" />
      </div>
    </div>
  </div>
);

export default DevicesContent;