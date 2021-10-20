import React, {useContext, useState} from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {UserContext} from '../Components/UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  Icon  from 'react-native-vector-icons/FontAwesome5';

const SignInScreen = ({navigation}) => {
  const [state, dispatch] = useContext(UserContext);
  const {user, id, pass, error} = state;
  const [visible, setVisible] = useState(true);
  
  const SignIn = async () => {
    try { 
      const userindex = user.findIndex(e => e.username == id);
      const passindex = user.findIndex(e => e.password == pass);
      if (userindex != -1 && passindex != -1 && userindex == passindex) {
        const stringdata = '1';
        await AsyncStorage.setItem('SINA', stringdata);
        dispatch({type: 'SignIn', value: stringdata}); 
      } else {
        dispatch({type: 'SignInError'});
      }
    } catch (e) {
        console.log(e);
    }
  };
  return (
    <View style={Styles.container}>
      <Icon name={visible ? 'eye' : 'eye-slash'} size={20} color='gray' onPress={() => setVisible(!visible)} style={Styles.eye}/>
      <Text style={{color: 'red', fontSize: 13}}>{error}</Text>
      <TextInput
        style={Styles.textinput1}
        placeholder={'Username'}
        onChangeText={(i) => dispatch({type: 'input', field: 'id', payload: i})}>
      </TextInput>
      <TextInput
        style={Styles.textinput1}
        placeholder={'Password'}
        onChangeText={(j) => dispatch({type: 'input', field: 'pass', payload: j})}
        secureTextEntry={visible}>
      </TextInput>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  eye: {
    position: 'absolute',
    top : 250,
    right: 65,
    zIndex: 2
  }
});
export default SignInScreen;
