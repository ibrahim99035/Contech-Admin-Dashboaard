import React, { useState, useEffect } from 'react';
import { 
  Home, 
  Users, 
  Building, 
  DoorOpen, 
  Lightbulb, 
  CheckSquare, 
  Settings, 
  BarChart3 
} from 'lucide-react';

import { userAdminApi } from '../api/userAdmin.api';

import Sidebar from '../components/admin/Sidebar';
import Header from '../components/admin/Header';
import OverviewContent from '../components/admin/OverviewContent';
import DevicesContent from '../components/admin/DevicesContent';
import TasksContent from '../components/admin/TasksContent';
import ApartmentsContent from '../components/admin/ApartmentsContent';
import UsersContent from '../components/admin/UsersContent';
import RoomsContent from '../components/admin/RoomsContent';

const AdminDashboard = ({ darkMode, setDarkMode }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalApartments: 0,
    totalRooms: 0,
    totalDevices: 0,
    activeTasks: 0,
    overdueTasks: 0,
    onlineDevices: 0,
    offlineDevices: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await userAdminApi.getUserStatistics();
        if (res.success && res.data) {
          // Map API response to stats used in OverviewContent
          setStats({
            totalUsers: res.data.userGrowth?.total ?? 0,
            totalApartments: res.data.contentCreation?.totalApartments ?? 0,
            totalRooms: res.data.contentCreation?.totalRooms ?? 0,
            totalDevices: res.data.contentCreation?.totalDevices ?? 0,
            activeTasks: res.data.systemHealth?.activeTasks ?? 0,
            overdueTasks: res.data.systemHealth?.failedTasks ?? 0,
            onlineDevices: res.data.systemHealth?.onlineDevices ?? 0,
            offlineDevices: res.data.systemHealth?.offlineDevices ?? 0,
          });
        }
      } catch (err) {
        // Optionally handle error
        console.error('Failed to fetch statistics:', err);
      }
    };
    fetchStats();
  }, []);

  const recentActivity = [
    { id: 1, type: 'user', action: 'New user registered', user: 'John Doe', time: '2 minutes ago' },
    { id: 2, type: 'device', action: 'Device went offline', device: 'Living Room Light', time: '5 minutes ago' },
    { id: 3, type: 'task', action: 'Task completed', task: 'Turn off bedroom lights', time: '10 minutes ago' },
    { id: 4, type: 'apartment', action: 'New apartment created', apartment: 'Sunset Complex', time: '15 minutes ago' },
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

  // Find the icon for the active tab
  const activeTabIcon = sidebarItems.find(item => item.id === activeTab)?.icon || Settings;

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewContent stats={stats} recentActivity={recentActivity} />;
      case 'users':
        return <UsersContent stats={stats} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      case 'apartments':
        return <ApartmentsContent stats={stats} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      case 'rooms':
        return <RoomsContent stats={stats} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      case 'devices':
        return <DevicesContent stats={stats} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />;
      case 'tasks':
        return <TasksContent stats={stats} />;
      default:
        return (
          <div className="flex items-center justify-center h-64 bg-white dark:bg-gray-900 transition-colors">
            <div className="text-center">
              <Settings className="w-12 h-12 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Feature coming soon...</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-950 transition-colors">
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        sidebarItems={sidebarItems}
        stats={stats}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden bg-white dark:bg-gray-900 transition-colors">
        <Header 
          activeTab={activeTab}
          activeTabIcon={activeTabIcon}
          sidebarCollapsed={sidebarCollapsed}
          setSidebarCollapsed={setSidebarCollapsed}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        
        <main className="flex-1 overflow-y-auto p-6 text-gray-900 dark:text-gray-100 transition-colors">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;