import React, { useState } from 'react';
import {
  X,
  Phone,
  Laptop,
  Tablet,
  Save,
  Edit,
  Trash2,
  AlertTriangle
} from 'lucide-react';

const UserModal = ({ user, isOpen, onClose, onUserUpdate }) => {
  const [editingRole, setEditingRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState(user?.role || 'customer');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [activeTab, setActiveTab] = useState('info');

  // Dummy data for additional user information not in the main component
  const getDummyUserData = (userId) => {
    const dummyData = {
      '1': {
        phone: '+1 (555) 123-4567',
        joinedDate: '2023-06-15',
        lastActive: '2024-01-15',
        devices: [
          { id: 1, name: 'iPhone 14', type: 'mobile', lastSeen: '2024-01-15 10:30 AM', ip: '192.168.1.10' },
          { id: 2, name: 'MacBook Pro', type: 'laptop', lastSeen: '2024-01-14 8:45 PM', ip: '192.168.1.15' },
          { id: 3, name: 'iPad Air', type: 'tablet', lastSeen: '2024-01-13 2:20 PM', ip: '192.168.1.12' }
        ]
      },
      '2': {
        phone: '+1 (555) 987-6543',
        joinedDate: '2023-03-22',
        lastActive: '2023-12-20',
        devices: [
          { id: 4, name: 'Samsung Galaxy', type: 'mobile', lastSeen: '2023-12-20 3:15 PM', ip: '192.168.1.20' }
        ]
      },
      '3': {
        phone: '+1 (555) 456-7890',
        joinedDate: '2022-11-10',
        lastActive: '2024-01-16',
        devices: [
          { id: 5, name: 'Dell Laptop', type: 'laptop', lastSeen: '2024-01-16 11:20 AM', ip: '192.168.1.25' },
          { id: 6, name: 'Android Phone', type: 'mobile', lastSeen: '2024-01-16 9:45 AM', ip: '192.168.1.30' }
        ]
      }
    };
    
    return dummyData[userId] || {
      phone: '+1 (555) 000-0000',
      joinedDate: '2023-01-01',
      lastActive: '2024-01-01',
      devices: []
    };
  };

  if (!isOpen || !user) return null;

  const dummyUserData = getDummyUserData(user._id);

  const handleRoleUpdate = () => {
    // Simulate role update
    onUserUpdate(user._id, { role: selectedRole });
    setEditingRole(false);
  };

  const handleStatusToggle = () => {
    // Simulate status toggle
    onUserUpdate(user._id, { active: !user.active });
  };

  const handleDeleteUser = () => {
    // Simulate user deletion
    onUserUpdate(user._id, { deleted: true });
    setShowDeleteConfirm(false);
    onClose();
  };

  const getDeviceIcon = (type) => {
    switch (type) {
      case 'mobile': return Phone;
      case 'laptop': return Laptop;
      case 'tablet': return Tablet;
      default: return Laptop;
    }
  };

  const getRoleColor = (role) => {
    switch (role) {
      case 'admin': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
      case 'moderator': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'customer': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
    }
  };

  const getStatusColor = (status) => {
    return status === 'active'
      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-lg font-medium text-gray-700 dark:text-gray-100">
                {user.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <div className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('info')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'info'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              User Info
            </button>
            <button
              onClick={() => setActiveTab('devices')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'devices'
                  ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              Devices ({dummyUserData.devices?.length || 0})
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'info' && (
            <div className="space-y-6">
              {/* User Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {user.name}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {dummyUserData.phone}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Joined Date
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {new Date(dummyUserData.joinedDate).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Active
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {new Date(dummyUserData.lastActive).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Apartments
                  </label>
                  <p className="text-gray-900 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                    {user.apartments && user.apartments.length > 0
                      ? user.apartments.map(a => a.name).join(', ')
                      : 'No apartments assigned'}
                  </p>
                </div>
              </div>

              {/* Role Management */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Role Management</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Current Role:</span>
                  {editingRole ? (
                    <div className="flex items-center space-x-2">
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                      >
                        <option value="customer">Customer</option>
                        <option value="moderator">Moderator</option>
                        <option value="admin">Admin</option>
                      </select>
                      <button
                        onClick={handleRoleUpdate}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1"
                      >
                        <Save className="w-4 h-4" />
                        <span>Save</span>
                      </button>
                      <button
                        onClick={() => setEditingRole(false)}
                        className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                      <button
                        onClick={() => setEditingRole(true)}
                        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                      >
                        <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Status and Actions */}
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Account Status</h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Status:</span>
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(user.active ? 'active' : 'inactive')}`}>
                      {user.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleStatusToggle}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        user.active
                          ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200 dark:bg-yellow-900 dark:text-yellow-100 dark:hover:bg-yellow-800'
                          : 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800'
                      }`}
                    >
                      {user.active ? 'Deactivate' : 'Activate'}
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(true)}
                      className="px-4 py-2 bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-100 dark:hover:bg-red-800 rounded-lg font-medium transition-colors flex items-center space-x-1"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete Account</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'devices' && (
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Connected Devices</h3>
              {dummyUserData.devices && dummyUserData.devices.length > 0 ? (
                <div className="space-y-3">
                  {dummyUserData.devices.map((device) => {
                    const DeviceIcon = getDeviceIcon(device.type);
                    return (
                      <div key={device.id} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <DeviceIcon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-gray-100">{device.name}</h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">IP: {device.ip}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-gray-900 dark:text-gray-100">Last seen</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{device.lastSeen}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 dark:text-gray-400">No devices connected</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-xl max-w-md w-full mx-4">
              <div className="flex items-center space-x-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Confirm Delete</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Are you sure you want to delete this user account? This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteUser}
                  className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg transition-colors"
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserModal;