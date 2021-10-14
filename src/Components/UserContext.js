import React, {createContext, useState} from 'react';

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      username: 'user',
      password: 'pass'
    }
  ]);
  const [token, setToken] = useState(0);
  return (
    <UserContext.Provider value={[user ,setUser, token, setToken]}>
      {props.children}
    </UserContext.Provider>
  );
};

