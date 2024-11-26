import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SignUpForm } from './components/formularios';

const SignUpScreen = () => {
  return (
    <View>
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;
