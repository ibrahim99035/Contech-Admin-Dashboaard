import React from 'react';
import { Plus, Search, Filter, DoorOpen, Lightbulb, Users, Lock, Unlock, Eye, Edit, Trash2 } from 'lucide-react';
import StatCard from './StatCard';

const RoomsContent = ({ stats, searchTerm, setSearchTerm }) => {
  const rooms = [
    { id: 1, name: 'Living Room', type: 'living', apartment: 'Sunset Complex', devices: 8, hasPassword: false, users: 3, creator: 'John Doe' },
    { id: 2, name: 'Master Bedroom', type: 'bedroom', apartment: 'Green Valley', devices: 6, hasPassword: true, users: 2, creator: 'Sarah Wilson' },
    { id: 3, name: 'Kitchen', type: 'kitchen', apartment: 'City Heights', devices: 12, hasPassword: false, users: 4, creator: 'Mike Johnson' },
    { id: 4, name: 'Home Office', type: 'office', apartment: 'Ocean View', devices: 5, hasPassword: true, users: 1, creator: 'Emma Davis' },
    { id: 5, name: 'Guest Room', type: 'bedroom', apartment: 'Mountain Lodge', devices: 4, hasPassword: false, users: 2, creator: 'Alex Thompson' },
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'living': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'bedroom': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'kitchen': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'office': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'bathroom': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'living': return '🛋️';
      case 'bedroom': return '🛏️';
      case 'kitchen': return '🍳';
      case 'office': return '💼';
      case 'bathroom': return '🚿';
      default: return '🏠';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Room Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage rooms and their device configurations</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Room</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <StatCard title="Total Rooms" value={stats.totalRooms} icon={DoorOpen} color="blue" />
        <StatCard title="Private Rooms" value="178" icon={Lock} color="red" />
        <StatCard title="Public Rooms" value="278" icon={Unlock} color="green" />
        <StatCard title="Avg Devices" value="6.2" icon={Lightbulb} color="yellow" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">All Rooms</h3>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search rooms..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="p-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {['Room', 'Type', 'Apartment', 'Devices', 'Users', 'Security', 'Creator', 'Actions'].map((header, idx) => (
                  <th key={idx} className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {rooms.map((room) => (
                <tr key={room.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center text-lg">
                        {getTypeIcon(room.type)}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{room.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(room.type)}`}>
                      {room.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{room.apartment}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    <div className="flex items-center">
                      <Lightbulb className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" />
                      {room.devices}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-1" />
                      {room.users}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {room.hasPassword ? (
                        <Lock className="w-4 h-4 text-red-500 mr-1" />
                      ) : (
                        <Unlock className="w-4 h-4 text-green-500 mr-1" />
                      )}
                      <span className={`text-xs font-medium ${room.hasPassword ? 'text-red-600' : 'text-green-600'}`}>
                        {room.hasPassword ? 'Private' : 'Public'}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{room.creator}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomsContent;