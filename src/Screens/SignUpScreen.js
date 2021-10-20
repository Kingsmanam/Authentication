import React, { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { UserContext } from '../Components/UserContext';

const SignUpScreen = ({navigation}) => {
  const [state, dispatch] = useContext(UserContext);
  const {user, username, password, error} = state;

  const SignUp = () => {

    if (username !== '' && password !== '') {
      dispatch({type: 'SignUp', value: [...user, {username, password}]})
      navigation.navigate('SignIn') 
    } else {
      dispatch({type: 'SignUpError'})
    }
  }
  
  return (

   <View style={Styles.container}>
     <Text style={{color: 'red', fontSize: 13, }}>{error}</Text>
    <TextInput 
      style={Styles.textinput1}
      placeholder={'Username'}
      onChangeText={(k) => dispatch({type: 'input', field: 'username', payload: k})}>
      
    </TextInput>
    <TextInput 
      style={Styles.textinput1}
      placeholder={'Password'}
      onChangeText={(m) => dispatch({type: 'input', field: 'password', payload: m})}>
      
    </TextInput>
    <TouchableOpacity style={Styles.SignIn} onPress={SignUp}>
      <Text style={{color:'white'}}>Sign Up</Text>
    </TouchableOpacity> 
   </View>
  );
};

const Styles = StyleSheet.create({
  
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    justifyContent: 'center'
  },
  textinput1: {
    height: 60 ,
    width: '80%',
    borderWidth: 1 ,
    borderRadius: 20,
    padding: 10,
    marginVertical : 5
  },
  SignIn: {
    width: '80%',
    height: 60,
    borderRadius: 20,
    padding : 10,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  }
})
export default SignUpScreen;
