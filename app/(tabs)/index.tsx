import React from 'react';
import { Image, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importar as telas
import LoginScreen from './login';
import TelaDeRecuperacao from './teladerecuperacao';

// Criar o Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Tela de Login */}
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerShown: false, // Oculta o cabeçalho
            }}
          />

          {/* Tela de Recuperação de Senha */}
          <Stack.Screen
            name="TelaDeRecuperacao"
            component={TelaDeRecuperacao}
            options={{
              title: 'Recuperar Senha', // Título no cabeçalho
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}
