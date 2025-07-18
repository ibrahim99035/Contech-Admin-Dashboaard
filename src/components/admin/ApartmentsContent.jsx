import React from 'react';
import { 
    Plus, 
    Search, 
    Filter, 
    Building, 
    DoorOpen, 
    Lightbulb, 
    Users, 
    Eye, 
    Edit, 
    Trash2, 
    Settings 
} from 'lucide-react';
import StatCard from './StatCard';

const ApartmentsContent = ({ stats, searchTerm, setSearchTerm }) => {
  const apartments = [
    { id: 1, name: 'Sunset Complex', creator: 'John Doe', rooms: 24, devices: 156, users: 8, status: 'active', created: '2024-01-10' },
    { id: 2, name: 'Green Valley', creator: 'Sarah Wilson', rooms: 18, devices: 98, users: 6, status: 'active', created: '2024-02-15' },
    { id: 3, name: 'City Heights', creator: 'Mike Johnson', rooms: 32, devices: 210, users: 12, status: 'maintenance', created: '2024-03-05' },
    { id: 4, name: 'Ocean View', creator: 'Emma Davis', rooms: 16, devices: 87, users: 5, status: 'active', created: '2024-03-20' },
    { id: 5, name: 'Mountain Lodge', creator: 'Alex Thompson', rooms: 28, devices: 145, users: 9, status: 'active', created: '2024-04-01' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'inactive': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Apartment Management</h2>
          <p className="text-gray-600 dark:text-gray-400">Manage apartment complexes and their configurations</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span>Add Apartment</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <StatCard title="Total Apartments" value={stats.totalApartments} icon={Building} color="blue" />
        <StatCard title="Active" value="76" icon={Building} color="green" />
        <StatCard title="Maintenance" value="8" icon={Settings} color="yellow" />
        <StatCard title="Avg Rooms" value="25.6" icon={DoorOpen} color="purple" />
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
        <div className="p-6 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">All Apartments</h3>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search apartments..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
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
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                {[
                  'Apartment', 'Creator', 'Rooms', 'Devices', 'Users', 'Status', 'Created', 'Actions'
                ].map((title, idx) => (
                  <th
                    key={idx}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
              {apartments.map((apartment) => (
                <tr key={apartment.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                        <Building className="w-5 h-5 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">{apartment.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{apartment.creator}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    <div className="flex items-center">
                      <DoorOpen className="w-4 h-4 text-gray-400 mr-1" />
                      {apartment.rooms}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    <div className="flex items-center">
                      <Lightbulb className="w-4 h-4 text-gray-400 mr-1" />
                      {apartment.devices}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-gray-400 mr-1" />
                      {apartment.users}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(apartment.status)}`}>
                      {apartment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{apartment.created}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300">
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

export default ApartmentsContent;