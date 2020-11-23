import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children: Children }) => {
  return (
    <AuthProvider>
      <ToastProvider>{Children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
