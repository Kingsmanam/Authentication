import React, { useContext, useState } from 'react';
import { TextInput, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { UserContext } from '../Components/UserContext';
const SignUpScreen = ({navigation}) => {
  const [user ,setUser, isSignedIn, setIsSignedIn] = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const SignUp = () => {
    setUser([...user, {username, password}]);
    (username !== '' && password !== '') ? navigation.navigate('SignIn') 
    : alert("You can't leave a field unfulfilled")
    
  }
  
  return (
   <View style={Styles.container}>
    <TextInput 
      style={Styles.textinput1}
      placeholder={'Username'}
      onChangeText={setUsername}>
      
    </TextInput>
    <TextInput 
      style={Styles.textinput1}
      placeholder={'Password'}
      onChangeText={setPassword}>
      
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
