import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import h1 from '../../assets/h1.png';
import h2 from '../../assets/h2.png';
import h3 from '../../assets/h3.png';
import bathIcon from '../../assets/bathicon.png';
import kitchenIcon from '../../assets/kitchenicon.png';
import roomIcon from '../../assets/livingroom.png';
import bedIcon from '../../assets/bedroomicon.png';
import userImage from '../../assets/user.png'; // Example user image
import chatIcon from '../../assets/chat.png'; // Example chat icon
import locationIcon from '../../assets/location.png'; // Location icon

const Details = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollViewRef = useRef();
  const navigation = useNavigation();

  const handleLocationPress = () => {
    const houseLatitude = 40.7128;
    const houseLongitude = -74.006;
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${houseLatitude},${houseLongitude}&travelmode=driving`;
    Linking.openURL(mapUrl);
  };

  const handleImagePress = (imageUri, index) => {
    setExpandedImage(imageUri);
    setActiveIndex(index);
  };

  const handleArrowPress = () => {
    setExpandedImage(null);
  };

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / 300);
    setActiveIndex(index);
  };

  const handlePricePress = () => {
    navigation.navigate('Formulaire');
  };

  const handleChatPress = () => {
    navigation.navigate('Chat');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          {expandedImage ? (
            <TouchableOpacity onPress={handleArrowPress}>
              <Image source={expandedImage} style={styles.expandedImage} />
              <Text style={styles.arrowText}>{'<'}</Text>
            </TouchableOpacity>
          ) : (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                ref={scrollViewRef}
                onScroll={handleScroll}
                pagingEnabled>
                {[h1, h2, h3].map((imageUri, index) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleImagePress(imageUri, index)}>
                    <Image source={imageUri} style={styles.homeImage} />
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={styles.dotContainer}>
                {[h1, h2, h3].map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.dot,
                      {
                        borderColor:
                          activeIndex === index ? '#9919' : 'transparent',
                      },
                    ]}>
                    <View
                      style={[
                        styles.dotInner,
                        {
                          backgroundColor:
                            activeIndex === index ? '#FFFFFF' : 'transparent',
                        },
                      ]}
                    />
                  </View>
                ))}
              </View>
            </>
          )}
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <Image source={bathIcon} style={styles.icon} />
            <Text>3 Baths</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={kitchenIcon} style={styles.icon} />
            <Text>2 Kitchens</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={roomIcon} style={styles.icon} />
            <Text>1 Salon</Text>
          </View>
          <View style={styles.iconBox}>
            <Image source={bedIcon} style={styles.icon} />
            <Text>4 Bedrooms</Text>
          </View>
        </View>

        <View style={styles.userLocationContainer}>
          <View style={styles.userInfoContainer}>
            <Image
              source={userImage}
              style={[styles.userImage, {marginRight: 10}]}
            />
            <View style={[styles.userDetails, {marginRight: 200}]}>
              <Text style={styles.userName}>John Doe</Text>
              <Text style={styles.userPrice}>$500,000</Text>
            </View>
            <TouchableOpacity
              onPress={handleChatPress}
              style={styles.chatIconContainer}>
              <Image source={chatIcon} style={styles.chatIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.locationDescriptionBox}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              This beautiful home is located in a peaceful neighborhood in New
              York, USA. It features a spacious layout with 4 bedrooms, 3
              bathrooms, 2 kitchens, and a cozy salon. The house is designed
              with modern amenities and stylish interiors, providing a
              comfortable living environment. With a total area of 2500 square
              feet, including a lush backyard garden and a two-car garage, this
              home offers ample space for relaxation and entertainment.
            </Text>

            <View style={styles.locationHeader}>
              <Image source={locationIcon} style={styles.locationIcon} />
              <Text style={styles.locationText}>New York, USA</Text>
            </View>
            <TouchableOpacity
              onPress={handleLocationPress}
              style={styles.viewMapButton}>
              <Text style={styles.viewMapText}>View on Map</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={handlePricePress}>
          <View style={styles.priceBox}>
            <Text style={styles.contactText}>claim !</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
  },
  imageContainer: {
    marginBottom: 20,
  },
  homeImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    resizeMode: 'cover',
    marginRight: 10,
  },
  expandedImage: {
    flex: 1,
    resizeMode: 'contain',
  },
  arrowText: {
    position: 'absolute',
    top: 10,
    left: 10,
    fontSize: 24,
    color: 'white',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  dotInner: {
    flex: 1,
    borderRadius: 8,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chatIconContainer: {
    marginRight: 10,
  },
  chatIcon: {
    width: 24,
    height: 24,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  userPrice: {
    fontSize: 16,
    color: '#888',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  iconBox: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  locationDescriptionBox: {
    backgroundColor: '#dddd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 10,
  },
  locationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  locationText: {
    fontSize: 16,
    marginBottom: 10,
  },
  viewMapButton: {
    backgroundColor: 'transparent',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  viewMapText: {
    color: 'green',
    fontWeight: 'bold',
  },
  priceBox: {
    backgroundColor: '#f4a460',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  contactText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

export default Details;
