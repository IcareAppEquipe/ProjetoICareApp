import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LoginForm } from './components/formularios';

const LoginScreen = () => {
  return (
    <View>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
