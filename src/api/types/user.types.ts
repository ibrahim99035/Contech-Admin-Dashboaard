export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'customer';
  active: boolean;
  emailActivated: boolean;
  googleId?: string;
  contactInfo?: string;
  apartments: Apartment[];
  devices: Device[];
  tasks: Task[];
  createdAt: string;
  updatedAt: string;
}

export interface Apartment {
  _id: string;
  name: string;
  rooms?: Room[];
}

export interface Room {
  _id: string;
  name: string;
  type: string;
  apartment: string;
  devices: Device[];
}

export interface Device {
  _id: string;
  name: string;
  type: string;
  status: 'on' | 'off' | 'locked' | 'unlocked';
  room: string;
  order: number;
  active: boolean;
  activated: boolean;
  capabilities: {
    brightness: boolean;
    color: boolean;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Task {
  _id: string;
  name: string;
  status: 'scheduled' | 'active' | 'completed' | 'failed' | 'cancelled';
  nextExecution?: string;
}

export interface UserAnalysis {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  emailActivatedUsers: number;
  roleDistribution: {
    admin: number;
    moderator: number;
    customer: number;
  };
  googleAuthUsers: number;
  usersWithApartments: number;
  usersWithDevices: number;
  usersWithTasks: number;
  averageApartmentsPerUser: number;
  averageDevicesPerUser: number;
  averageTasksPerUser: number;
  recentRegistrations: number;
}

export interface Pagination {
  total: number;
  page: number;
  pages: number;
  limit: number;
  showing: number;
  hasNext: boolean;
  hasPrev: boolean;
  nextPage: number | null;
  prevPage: number | null;
  startIndex: number;
  endIndex: number;
}

export interface UserDetailAnalysis {
  totalApartments: number;
  totalRooms: number;
  totalDevices: number;
  totalTasks: number;
  activeTasks: number;
  completedTasks: number;
  failedTasks: number;
  devicesByType: Record<string, number>;
  lastActivity: string;
  accountAge: string;
}

export interface UserStatistics {
  userGrowth: {
    thisWeek: number;
    thisMonth: number;
    total: number;
  };
  engagement: {
    activeUsers: number;
    emailActivatedUsers: number;
    usersWithContent: number;
  };
  contentCreation: {
    totalApartments: number;
    totalDevices: number;
    totalTasks: number;
    averageApartmentsPerUser: number;
    averageDevicesPerUser: number;
    averageTasksPerUser: number;
  };
  systemHealth: {
    activeTasks: number;
    failedTasks: number;
    completedTasks: number;
    onlineDevices: number;
    offlineDevices: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  error?: string;
  data?: T;
  analysis?: UserAnalysis | UserDetailAnalysis;
  pagination?: Pagination;
}

export interface SearchUsersParams {
  role?: 'admin' | 'moderator' | 'customer';
  active?: boolean;
  emailActivated?: boolean;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface GetAllUsersParams {
  page?: number;
  limit?: number;
}

export interface UpdateUserRoleData {
  role: 'admin' | 'moderator' | 'customer';
}