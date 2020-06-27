import React, { useState } from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import LoginScreen from './src/loginScreen';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const cacheResourcesAsync = async () => {
    const images = [require('./assets/images/2.jpg')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all([cacheImages]);
  }

  if (!isReady) {
    return (
      <AppLoading
        startAsync={() => cacheResourcesAsync()}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <LoginScreen></LoginScreen>
  );



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

