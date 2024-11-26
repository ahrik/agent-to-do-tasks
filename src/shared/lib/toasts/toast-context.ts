import { createContext } from 'react';
import type { NotificationInstance } from 'antd/es/notification/interface';

interface ToastContextType {
  notificationApi: NotificationInstance;
}

export const ToastContext = createContext<ToastContextType | null>(null);
