import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import axios from 'axios';
import axiosInstance from '../../Api/controllers/AxiosInstance.cjs';

import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    // const fetchUserProfile = async () => {
    //   try {
    //     // Retrieve user information from AsyncStorage
    //     const userData = await AsyncStorage.getItem('userData');
    //     if (userData) {
    //       const parsedUserData = JSON.parse(userData);
    //       setUser(parsedUserData);
    //     }
    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //   }
    // };
    const fetchUserProfile = async()=>{
      try{
        const response = await axiosInstance.get("http://192.168.1.199:4001/profile");
        setUser(response.data);

      }catch(error){
        console.error(error);
        Alert.alert('Error','Failed to fetch profile')
      } finally{
        setloading(false);
      }
    }
    fetchUserProfile();
  }, []);
 if(loading){
  return <ActivityIndicator size='large' />
 }
  return (
    <View style={styles.container}>
      {user ? (
        <View style={styles.profileContainer}>
          <Text style={styles.label}>Full Name:</Text>
          <Text>{user.fullName}</Text>

          <Text style={styles.label}>Email:</Text>
          <Text>{user.email}</Text>

          <Text style={styles.label}>Address:</Text>
          <Text>{user.address}</Text>
          {/* Add more user information fields as needed */}
        </View>
      ) : (
        <Text>No user data found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    width: '100%',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProfileScreen;
