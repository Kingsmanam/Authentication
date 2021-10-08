import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DigikalaScreen from './DigikalaScreen';
import {UserContext} from '../Components/UserContext';
const Stack = createNativeStackNavigator();
const App = () => {
  const [user ,setUser, isSignedIn, setIsSignedIn] = useContext(UserContext);
  const [isloading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isloading ? (
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : isSignedIn ? (
          
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen name="Digikala" component={DigikalaScreen} />
        )}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
