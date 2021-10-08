import React, {createContext, useState} from 'react';

export const UserContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState([
    {
      username: 'test',
      password: 'test'
    }
  ]);
  const [isSignedIn, setIsSignedIn] = useState(true)
  return (
    <UserContext.Provider value={[user ,setUser, isSignedIn, setIsSignedIn]}>
      {props.children}
    </UserContext.Provider>
  );
};

