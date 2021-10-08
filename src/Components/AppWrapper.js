import React from 'react';
import App from '../Screens/App';
import { UserProvider } from './UserContext';
const AppWrapper = () => {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
};

export default AppWrapper;
