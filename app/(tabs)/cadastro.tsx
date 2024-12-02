import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';

import { SignUpForm } from './components/formularios';

const SignUpScreen = () => {
  return (
    <View>
      <SignUpForm />
    </View>
  );
};

export default SignUpScreen;
