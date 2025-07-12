import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { MainNavi } from './src/Navigations/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { persistor, store } from './src/config/store';
import { PersistGate } from 'redux-persist/integration/react';


export default function App() {
  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>

        <View style={styles.container}>
      <MainNavi/>
      <StatusBar style="auto" />
         </View>
    </NavigationContainer>
    </PersistGate>
 </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
flex: 1,
  },
});
