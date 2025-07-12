import React , {JSX}from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";
import { naviName } from "../config/naviName";
import { AuthNavi } from "./AuthNavi";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";


// 1. Define Param List
export type RootStackParamList = {

  [naviName.AuthNavi]: undefined;

};

// 2. Create typed stack
const Stack = createStackNavigator<RootStackParamList>();

// 3. Main Navigator
export function MainNavi(): JSX.Element {
  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator
      initialRouteName={naviName.AuthNavi}
    screenOptions={screenOptions}
    >

      <Stack.Screen name={naviName.AuthNavi} component={AuthNavi} />

    </Stack.Navigator>
  );
}
