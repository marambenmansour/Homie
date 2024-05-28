import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import logo from '../../assets/logon.png';
import CustomInput from '../components/CustomInput';

const AddPublication = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [Type, setType] = useState('');
  const [Description, setDescription] = useState('');
  const [Bathrooms, setBathrooms] = useState('');
  const [Kitchens, setKitchens] = useState('');
  const [Rooms, setRooms] = useState('');

  const {height} = useWindowDimensions();

  const handleAddpublication = async () => {
    try {
      const response = await axios.post(
        'http://192.168.1.199:4001/addpublication',
        {
          address,
          Type,
          Description,
          Bathrooms,
          Kitchens,
          Rooms,
        },
      );
      // Assuming the API returns some data upon successful signup
      Alert.alert('Success', 'Publication added successfully!');
      navigation.navigate('Profile'); // Navigate to the home screen or dashboard
    } catch (error) {
      // Handle signup error, e.g., show an error message
      Alert.alert(
        'Error',
        error.response.data.message || 'Something went wrong',
      );
    }
  };

  return (
    <View style={styles.root}>
      <Image
        source={logo}
        style={[styles.logo, {height: height * 0.2}]}
        resizeMode="contain"
      />

      <Text style={styles.txt}>Create account to continue</Text>
      <View style={styles.space} />
      <CustomInput
        placeholder="Address"
        value={address}
        setValue={setAddress}
      />
      <CustomInput placeholder="Type" value={Type} setValue={setType} />
      <CustomInput
        placeholder="Description"
        value={Description}
        setValue={setDescription}
      />
      <CustomInput
        placeholder="Bathrooms"
        value={Bathrooms}
        setValue={setBathrooms}
      />
      <CustomInput
        placeholder="Kitchens"
        value={Kitchens}
        setValue={setKitchens}
      />
      <CustomInput placeholder="Rooms" value={Rooms} setValue={setRooms} />

      <TouchableOpacity style={styles.btn} onPress={handleAddpublication}>
        <Text style={styles.btnText}>Add Publication</Text>
      </TouchableOpacity>
      <View style={styles.styleView}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    maxHeight: 80,
    maxWidth: 190,
    paddingHorizontal: 30,
  },
  txt: {
    marginBottom: 20,
  },
  space: {
    marginBottom: 20,
  },
  text3: {
    textAlign: 'center',
    paddingLeft: 15,
  },
  text5: {
    textAlign: 'center',
    padding: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  tri: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
  styleView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  styleView2: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  toucher: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 45,
    borderWidth: 1,
    borderColor: '#234B33',
    marginRight: 5,
    borderRadius: 15,
  },
  img: {
    height: 32,
    width: 32,
    margin: 8,
  },
  btn: {
    backgroundColor: '#234B33',
    width: '100%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 20,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddPublication;
