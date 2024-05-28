import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen';
import Profile from './src/screen/Profile';
import SigninScreen from './src/screen/SigninScreen';
import SplashScreen from './src/screen/SplashScreen';
import SignupScreen from './src/screen/SignupScreen';
import EditProfile from './src/screen/EditProfile';
import ForgetPassword from './src/screen/ForgetPassword';
import Notifications from './src/screen/Notifications';
import MainContainer from './src/screen/MainContainer';
import Favoris from './src/screen/Favoris';
import Recommended from './src/screen/Recommended';
import OnboardingScreen from './src/screen/OnboardingScreen';
import PublicationScreen from './src/screen/PublicationScreen';
import Details from './src/screen/Details';
import Chat from './src/screen/Chat';
import MyPublication from './src/screen/MyPublication';
import Formulaire from './src/screen/Formulaire';
import Claims from './src/screen/Claims';
import FetchPublication from './src/screen/FetchPublication.cjs';
import Downloaded from './src/screen/Downloaded';
import AddPublication from './src/screen/AddPublication';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="SigninScreen" component={SigninScreen} />
        <Stack.Screen name="AddPublication" component={AddPublication} />

        <Stack.Screen name="Profile" component={Profile} />

        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="FetchPublication" component={FetchPublication} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Recommended" component={Recommended} />

        <Stack.Screen name="Downloaded" component={Downloaded} />
   

        <Stack.Screen name="MainContainer" component={MainContainer} />
        <Stack.Screen name="MyPublication" component={MyPublication} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Formulaire" component={Formulaire} />
        <Stack.Screen name="Claims" component={Claims} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PublicationScreen" component={PublicationScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Favoris" component={Favoris} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
