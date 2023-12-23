import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './app/navigation/Navigation';

export default function App() {


  return(
    <SafeAreaProvider style= {{flex: 1}}>
      <Navigation />
    </SafeAreaProvider>
  );
}
