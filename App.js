import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import GlobalNavigation from './navigation/GlobalNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <GlobalNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}


