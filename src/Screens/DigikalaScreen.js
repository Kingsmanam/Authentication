import React, {useEffect, useState, useContext} from 'react';
import {FlatList, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {ActivityIndicator, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../Components/UserContext';

const DigikalaScreen = () => {
  const [user, setUser, token, setToken] = useContext(UserContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);

  const onChangeSearch = value => {
    setSearchQuery(value);
    getProductsFromDigikala();
  };

  const getProductsFromDigikala = async () => {
    try {
      const response = await fetch(
        `https://www.digikala.com/ajax/autosuggest/?q=${searchQuery}`,
      );
      const json = await response.json();
      setData(json.data.suggestion_products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const renderProducts = ({item}) => {
    if (isloading) {
      return <ActivityIndicator />;
    }
    return (
      <TouchableOpacity style={styles.itemcart} >
        <Image source={{uri: item.image}} style={styles.productimage} />
        <View style={styles.textcontainer}>
          <Text style={{width: '100%', lineHeight: 22, fontSize: 12}} numberOfLines={5}>
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const SignOut = async () => {
    try {
      await AsyncStorage.removeItem('SINA');
      setToken(0);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.maincontainer}>
      <Icon name="logout" style={styles.button} size={50} onPress={SignOut} />
      <Searchbar
        style={styles.searchbar}
        inputStyle={{fontSize: 16}}
        placeholder="Search"
        onChangeText={onChangeSearch}>
      </Searchbar>
      <View style={{width: '100%', height: '25%', marginTop: 10}}>
        <FlatList
          data={data}
          renderItem={renderProducts}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          inverted
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    paddingTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  searchbar: {
    backgroundColor: '#E0E0E0',
  },
  itemcart: {
    flexDirection: 'row-reverse',
    height: '95%',
    padding: 10,
    borderWidth: 2,
    marginHorizontal: 5,
    borderColor: '#ECEFF1',
    borderRadius: 20
  },
  productimage: {
    resizeMode: 'center',
    width: 110,
    height: 120,
    marginLeft: 10,
  },
  textcontainer: {
    width: 175,
    height: '90%',
  },
  button: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
});
export default DigikalaScreen;
