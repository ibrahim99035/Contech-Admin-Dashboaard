import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Building, 
  DoorOpen, 
  Lightbulb, 
  CheckSquare, 
  Settings, 
  TrendingUp, 
  AlertCircle,
  Activity,
  Calendar,
  Clock,
  Search,
  Filter,
  MoreVertical,
  ChevronRight,
  Eye,
  Edit,
  Trash2,
  Plus,
  RefreshCw,
  Download,
  BarChart3,
  PieChart,
  Shield,
  Wifi,
  WifiOff,
  Power,
  PowerOff,
  Bell,
  User,
  LogOut
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Mock data for demonstration
  const stats = {
    totalUsers: 1247,
    totalApartments: 89,
    totalRooms: 456,
    totalDevices: 2134,
    activeTasks: 78,
    overdueTasks: 12,
    onlineDevices: 1987,
    offlineDevices: 147
  };

  const recentActivity = [
    { id: 1, type: 'user', action: 'New user registered', user: 'John Doe', time: '2 minutes ago' },
    { id: 2, type: 'device', action: 'Device went offline', device: 'Living Room Light', time: '5 minutes ago' },
    { id: 3, type: 'task', action: 'Task completed', task: 'Turn off bedroom lights', time: '10 minutes ago' },
    { id: 4, type: 'apartment', action: 'New apartment created', apartment: 'Sunset Complex', time: '15 minutes ago' },
  ];

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'customer', apartment: 'Sunset Complex #101', status: 'active', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Wilson', email: 'sarah@example.com', role: 'moderator', apartment: 'Green Valley #205', status: 'active', joinDate: '2024-02-03' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', role: 'customer', apartment: 'City Heights #302', status: 'inactive', joinDate: '2024-03-10' },
    { id: 4, name: 'Emma Davis', email: 'emma@example.com', role: 'customer', apartment: 'Sunset Complex #203', status: 'active', joinDate: '2024-03-22' },
    { id: 5, name: 'Alex Thompson', email: 'alex@example.com', role: 'admin', apartment: 'Admin Access', status: 'active', joinDate: '2024-01-01' },
  ];

  const apartments = [
    { id: 1, name: 'Sunset Complex', creator: 'John Doe', rooms: 24, devices: 156, users: 8, status: 'active', created: '2024-01-10' },
    { id: 2, name: 'Green Valley', creator: 'Sarah Wilson', rooms: 18, devices: 98, users: 6, status: 'active', created: '2024-02-15' },
    { id: 3, name: 'City Heights', creator: 'Mike Johnson', rooms: 32, devices: 210, users: 12, status: 'maintenance', created: '2024-03-05' },
    { id: 4, name: 'Ocean View', creator: 'Emma Davis', rooms: 16, devices: 87, users: 5, status: 'active', created: '2024-03-20' },
    { id: 5, name: 'Mountain Lodge', creator: 'Alex Thompson', rooms: 28, devices: 145, users: 9, status: 'active', created: '2024-04-01' },
  ];

  const rooms = [
    { id: 1, name: 'Living Room', type: 'living', apartment: 'Sunset Complex', devices: 8, hasPassword: false, users: 3, creator: 'John Doe' },
    { id: 2, name: 'Master Bedroom', type: 'bedroom', apartment: 'Green Valley', devices: 6, hasPassword: true, users: 2, creator: 'Sarah Wilson' },
    { id: 3, name: 'Kitchen', type: 'kitchen', apartment: 'City Heights', devices: 12, hasPassword: false, users: 4, creator: 'Mike Johnson' },
    { id: 4, name: 'Home Office', type: 'office', apartment: 'Ocean View', devices: 5, hasPassword: true, users: 1, creator: 'Emma Davis' },
    { id: 5, name: 'Guest Room', type: 'bedroom', apartment: 'Mountain Lodge', devices: 4, hasPassword: false, users: 2, creator: 'Alex Thompson' },
  ];

  const devices = [
    { id: 1, name: 'Living Room Light', type: 'Smart Light', status: 'online', room: 'Living Room', activated: true, capabilities: ['brightness', 'color'] },
    { id: 2, name: 'Bedroom Fan', type: 'Smart Fan', status: 'offline', room: 'Bedroom', activated: true, capabilities: ['speed'] },
    { id: 3, name: 'Kitchen Thermostat', type: 'Thermostat', status: 'online', room: 'Kitchen', activated: true, capabilities: ['temperature'] },
    { id: 4, name: 'Garage Door', type: 'Smart Lock', status: 'online', room: 'Garage', activated: true, capabilities: ['lock'] },
    { id: 5, name: 'Bathroom Heater', type: 'Smart Heater', status: 'offline', room: 'Bathroom', activated: false, capabilities: ['temperature'] },
  ];

  const tasks = [
    { id: 1, title: 'Turn off all lights', status: 'completed', device: 'Living Room Light', scheduledTime: '2 hours ago', type: 'One-time', creator: 'John Doe' },
    { id: 2, title: 'Morning routine', status: 'pending', device: 'Multiple devices', scheduledTime: '6:00 AM', type: 'Daily', creator: 'Sarah Wilson' },
    { id: 3, title: 'Lock all doors', status: 'overdue', device: 'Front Door Lock', scheduledTime: '10:00 PM', type: 'Daily', creator: 'Mike Johnson' },
    { id: 4, title: 'Adjust thermostat', status: 'completed', device: 'Main Thermostat', scheduledTime: '1 hour ago', type: 'Scheduled', creator: 'Emma Davis' },
    { id: 5, title: 'Security check', status: 'pending', device: 'Security System', scheduledTime: '11:00 PM', type: 'Daily', creator: 'Alex Thompson' },
  ];

  const sidebarItems = [
    { id: 'overview', icon: Home, label: 'Overview', active: true },
    { id: 'users', icon: Users, label: 'Users', count: stats.totalUsers },
    { id: 'apartments', icon: Building, label: 'Apartments', count: stats.totalApartments },
    { id: 'rooms', icon: DoorOpen, label: 'Rooms', count: stats.totalRooms },
    { id: 'devices', icon: Lightbulb, label: 'Devices', count: stats.totalDevices },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', count: stats.activeTasks },
    { id: 'analytics', icon: BarChart3, label: 'Analytics' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  const StatCard = ({ title, value, change, icon: Icon, color = 'blue' }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <p className={`text-sm mt-1 ${change > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {change > 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className={`p-3 rounded-lg bg-${color}-50`}>
          <Icon className={`w-6 h-6 text-${color}-600`} />
        </div>
      </div>
    </div>
  );

  const DeviceStatus = ({ name, status, type, room, lastActive }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${status === 'online' ? 'bg-green-50' : 'bg-red-50'}`}>
          <Lightbulb className={`w-5 h-5 ${status === 'online' ? 'text-green-600' : 'text-red-600'}`} />
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{type} • {room}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          status === 'online' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
        <button className="p-1 hover:bg-gray-100 rounded">
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );

  const TaskItem = ({ title, status, device, scheduledTime, type }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg ${
          status === 'completed' ? 'bg-green-50' : 
          status === 'pending' ? 'bg-yellow-50' : 'bg-red-50'
        }`}>
          <CheckSquare className={`w-5 h-5 ${
            status === 'completed' ? 'text-green-600' : 
            status === 'pending' ? 'text-yellow-600' : 'text-red-600'
          }`} />
        </div>
        <div>
          <p className="font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-500">{device} • {type}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">{scheduledTime}</span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          status === 'completed' ? 'bg-green-100 text-green-800' : 
          status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
        }`}>
          {status}
        </span>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StatCard title="Total Users" value={stats.totalUsers} change={12} icon={Users} color="blue" />
              <StatCard title="Total Apartments" value={stats.totalApartments} change={8} icon={Building} color="green" />
              <StatCard title="Active Devices" value={stats.onlineDevices} change={-3} icon={Lightbulb} color="yellow" />
              <StatCard title="Active Tasks" value={stats.activeTasks} change={15} icon={CheckSquare} color="purple" />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Status Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Online Devices</span>
                    <span className="text-sm font-medium text-green-600">{stats.onlineDevices}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${(stats.onlineDevices / stats.totalDevices) * 100}%` }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Offline Devices</span>
                    <span className="text-sm font-medium text-red-600">{stats.offlineDevices}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-600 h-2 rounded-full" style={{ width: `${(stats.offlineDevices / stats.totalDevices) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Task Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Completed Today</span>
                    <span className="text-sm font-medium text-green-600">145</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Active Tasks</span>
                    <span className="text-sm font-medium text-blue-600">{stats.activeTasks}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Overdue Tasks</span>
                    <span className="text-sm font-medium text-red-600">{stats.overdueTasks}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
              </div>
              <div className="space-y-3">
                {recentActivity.map(activity => (
                  <div key={activity.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                    <Activity className="w-5 h-5 text-gray-400" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.action}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'devices':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Device Management</h2>
                <p className="text-gray-600">Monitor and control all connected devices</p>
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

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">All Devices</h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search devices..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                      <Filter className="w-4 h-4 text-gray-600" />
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

      case 'tasks':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Task Management</h2>
                <p className="text-gray-600">Manage automation tasks and schedules</p>
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

            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">All</button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Active</button>
                    <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50">Overdue</button>
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

      default:
        return (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <Settings className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Feature coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarCollapsed ? 'w-16' : 'w-64'} bg-white shadow-lg border-r border-gray-200 transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            {!sidebarCollapsed && (
              <div>
                <h1 className="text-xl font-bold text-gray-900">HomeAuto</h1>
                <p className="text-sm text-gray-500">Admin Panel</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {!sidebarCollapsed && (
                <>
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.count && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </>
              )}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-600" />
            </div>
            {!sidebarCollapsed && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Admin User</p>
                <p className="text-xs text-gray-500">admin@homeauto.com</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <Settings className="w-5 h-5 text-gray-600" />
              </button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 capitalize">{activeTab}</h1>
                <p className="text-sm text-gray-500">Welcome to your admin dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-lg relative">
                <Bell className="w-5 h-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <LogOut className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;