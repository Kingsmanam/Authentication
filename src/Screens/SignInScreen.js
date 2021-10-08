import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../Components/UserContext';

const SignInScreen = ({navigation}) => {
  const [user, setUser, isSignedIn, setIsSignedIn] = useContext(UserContext);
  const [id, setId] = useState('');
  const [pass, setPass] = useState('');

  

  const SignIn = () => {
    for (let i = 0; i < user.length; i++) {
      if (user[i].username == id && user[i].password == pass) {
        setIsSignedIn(false);
      } else {
        alert('Username or Password may not be correct');
      }
    }
    
  };

  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.textinput1}
        placeholder={'Username'}
        onChangeText={setId}></TextInput>
      <TextInput
        style={Styles.textinput1}
        placeholder={'Password'}
        onChangeText={setPass}></TextInput>
      <View style={Styles.container2}>
        <Text style={{fontSize: 13}}>Dont have an account? </Text>
        <TouchableOpacity
          style={Styles.touchableopacity}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={{fontSize: 11, color: 'white'}}>Signup</Text>
        </TouchableOpacity>
        <Text>here!</Text>
      </View>
      <TouchableOpacity style={Styles.SignIn} onPress={SignIn}>
        <Text style={{color: 'white'}}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center',
  },
  textinput1: {
    height: 60,
    width: '80%',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    marginVertical: 5,
  },
  container2: {
    height: 50,
    width: '85%',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableopacity: {
    height: 36,
    width: 48,
    backgroundColor: 'hotpink',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    marginRight: 2,
  },
  SignIn: {
    width: '80%',
    height: 60,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default SignInScreen;
