import React, {useEffect, useState, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import DigikalaScreen from './DigikalaScreen';
import {UserContext} from '../Components/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App = () => {
  const [user ,setUser, token, setToken] = useContext(UserContext);
  const [isloading, setLoading] = useState(true);
  

  const getData = async () => {
    try {
      const stringdata = await AsyncStorage.getItem('@save_token');
      if (stringdata !== null) {
        setToken(stringdata);
      }
      console.log('geting',token);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    getData();
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
        ) : token !== '1'  ? (
          <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen
            name="Digikala"
            component={DigikalaScreen}
            options={{headerShown : false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
