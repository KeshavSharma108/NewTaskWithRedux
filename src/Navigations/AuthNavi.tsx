import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { naviName } from '../config/naviName';
import LoginScreen from '../Screens/LoginScreen';
import HomeScreen from '../Screens/HomeScreen';
import AuthLoader from '../Screens/AuthLoader'; 

export type AuthStackParamList = {
  [naviName.Splash]: undefined;
  [naviName.Login]: undefined;
  [naviName.HomeScreen]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthNavi() {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator initialRouteName={naviName.Splash} screenOptions={screenOptions}>
      <Stack.Screen name={naviName.Splash} component={AuthLoader} />
      <Stack.Screen name={naviName.Login} component={LoginScreen} />
      <Stack.Screen name={naviName.HomeScreen} component={HomeScreen} />
    </Stack.Navigator>
  );
}
