import React, {createContext, useReducer} from 'react';

export const UserContext = createContext();

const initialstate = {
  user: [
    {
      username: 'user',
      password: 'pass'
    }
  ],
  username: '',
  password: '',
  token: 0,
  id: '',
  pass: '',
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'input': {  
      return {
        ...state,
        [action.field]: action.payload,
        error: ''
      };
    }
    case 'SignIn': {
      return {
        ...state,
        token: action.value,
        error: ''
      };
    } 
    case 'SignUp': {
      return {
        ...state,
        user: action.value,
        username: '',
        password: '',
        error: ''
      }
    }
    case 'SignInError': {
      return {
        ...state,
        error: 'Incorrect username or password !',
      };
    }
    case 'SignUpError': {
      return {
        ...state,
        error: "You can't leave a field unfulfilled"
      }
    }
    case 'SignOut': {
      return {
        ...state,
        token: 0,
        id: '',
        pass: '',
        error: ''
      };
    }
    default:
      return state; 
  }
}

export const UserProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <UserContext.Provider value={[state, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};

