import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import logon from '../../assets/logon.png';
import profile from '../../assets/profile.png';
import notif from '../../assets/notif.png';
import loupe from '../../assets/loupe.png';
import home1 from '../../assets/home1.png';
import home2 from '../../assets/home2.png';
import home3 from '../../assets/home3.png';
import villaLogo from '../../assets/villa.png';
import apartmentLogo from '../../assets/apart.png';
import houseLogo from '../../assets/house.png';
import Recommended from './Recommended';
import Profile from './Profile';

const {width: screenWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollViewRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const goToProfile = () => {
    navigation.navigate('Profile');
  };

  const goToNotifications = () => {
    navigation.navigate('Notifications');
  };

  const goToRecommendedOptions = () => {
    navigation.navigate('Recommended');
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentPage < 2) {
        setCurrentPage(currentPage + 1);
      } else {
        setCurrentPage(0);
      }
    }, 3000);

    return () => clearInterval(timer);
  }, [currentPage]);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: currentPage * screenWidth,
      animated: true,
    });
  }, [currentPage]);

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={logon} style={styles.logo} />
        <TouchableOpacity onPress={goToProfile} style={styles.profileContainer}>
          <Image source={profile} style={styles.profileImage} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goToNotifications}
          style={styles.notificationContainer}>
          <Image source={notif} style={styles.notificationIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Image source={loupe} style={styles.searchIcon} />
        <TextInput
          placeholder="Search for Villa, Apartment, ..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}>
          <Image
            source={home1}
            style={[styles.homeImage, {width: screenWidth}]}
          />
          <Image
            source={home2}
            style={[styles.homeImage, {width: screenWidth}]}
          />
          <Image
            source={home3}
            style={[styles.homeImage, {width: screenWidth}]}
          />
        </ScrollView>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>Categories</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesScrollView}>
          <View style={styles.categoryBox}>
            <Image source={villaLogo} style={styles.categoryLogo} />
            <Text style={styles.categoryText}>Villa</Text>
          </View>
          <View style={styles.categoryBox}>
            <Image source={apartmentLogo} style={styles.categoryLogo} />
            <Text style={styles.categoryText}>Apartment</Text>
          </View>
          <View style={styles.categoryBox}>
            <Image source={houseLogo} style={styles.categoryLogo} />
            <Text style={styles.categoryText}>House</Text>
          </View>
        </ScrollView>
      </View>
      <View style={styles.categoriesContainer}>
        <Text style={styles.categoriesText}>
          Recommended for you
          <TouchableOpacity onPress={goToRecommendedOptions}>
            <Text style={styles.arrowText}>
              {'                                       '}&gt;
            </Text>
          </TouchableOpacity>
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendedScrollView}>
          <Image
            source={home1}
            style={[styles.recommendedImage, {width: 280}]}
            blurRadius={3}
          />
          <Image
            source={home2}
            style={[styles.recommendedImage, {width: 280}]}
            blurRadius={3}
          />
          <Image
            source={home3}
            style={[styles.recommendedImage, {width: 280}]}
            blurRadius={3}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  notificationContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginLeft: 10,
  },
  notificationIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  logo: {
    width: 150,
    height: 35,
    marginRight: 130,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 10,
    borderWidth: 1,
    height: 40,
    borderColor: 'grey',
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: '100%',
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
  },
  categoriesContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  categoriesText: {
    color: 'darkgreen',
    fontSize: 18,
    fontWeight: 'bold',
    flexDirection: 'row',
  },
  categoriesScrollView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  arrowText: {
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  categoryBox: {
    width: 130,
    height: 30,
    backgroundColor: 'lightgrey',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    flexDirection: 'row', // Align items horizontally
  },
  categoryLogo: {
    width: 40,
    height: 50,
    resizeMode: 'contain',
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 13,
  },
  scrollViewContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
    height: 150,
    borderRadius: 20, // Add border radius
    overflow: 'hidden', // Hide overflow to make border radius visible
  },
  scrollViewContent: {
    alignItems: 'center',
  },
  homeImage: {
    width: screenWidth,
    height: 150,
    borderRadius: 10, // Add border radius
    resizeMode: 'cover',
    marginRight: 10,
  },
  recommendedScrollView: {
    marginTop: 10,
    flexDirection: 'row',
  },
  recommendedImage: {
    width: screenWidth,
    height: 200,
    borderRadius: 20,
    marginRight: 10,
  },
});

export default HomeScreen;
