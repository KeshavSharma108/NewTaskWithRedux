import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import Mainlayout from '../Components/Mainlayout';
import CustomInput from '../Components/customInput';
import CustomTitle from '../Components/customTitle';
import CustomButton from '../Components/customButton';

import {
  selectLoginError,
  selectLoginResponse,
  updateLoginError,
  updateLoginResponse,
} from '../reduxStates/Auth';
import Services from '../Services/AuthServices';
import { naviName } from '../config/naviName';
import { AuthStackParamList } from '../Navigations/AuthNavi';


type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const LoginScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const loginResponse = useSelector(selectLoginResponse);
  const loginError = useSelector(selectLoginError);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await Services.login({ email, password });

      console.log('Login API response:', response);
      dispatch(updateLoginResponse(response));
      dispatch(updateLoginError(null));

      // ⛔ Don't show success message, just navigate
      navigation.replace(naviName.HomeScreen);
    } catch (error: any) {
      console.log('Login Error:', error?.message || error);
      dispatch(updateLoginError('Login failed. Please check your credentials.'));
      dispatch(updateLoginResponse(null));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Mainlayout style={styles.container} >
      <CustomTitle>
        <Text>Login</Text>
      </CustomTitle>

      <CustomInput
        title="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomInput
        title="Password"
        placeholder="Enter Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Login"
        onPress={handleLogin}
        backgroundColor="cyan"
        color="white"
        loading={loading}
      />

      {loginError && <Text style={styles.errorText}>{loginError}</Text>}
    </Mainlayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', marginTop: 10 },
});
