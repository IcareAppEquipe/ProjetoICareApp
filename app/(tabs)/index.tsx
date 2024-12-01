import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import CardBemVindo from './components/cards';
import LoginScreen from './login'
import TelaDeRecuperacao from './teladerecuperacao'



const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <CardBemVindo />
          <Image source={require('../../assets/images/logo.png')}  style={{ width: 200, height: 200, resizeMode: 'contain' }}/>
          <LoginScreen/>
        </View>
    </SafeAreaProvider>
  );
}
