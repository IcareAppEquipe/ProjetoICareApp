import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import LoginScreen from './login';
import TelaDeRecuperacao from './teladerecuperacao';

// Definir os tipos de parâmetros para o Stack Navigator
type RootStackParamList = {
  Login: undefined;
  TelaDeRecuperacao: undefined; // ou os parâmetros necessários para a tela de recuperação
};

// Criação do Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function HomeScreen() {
  // Tipar a navegação usando o tipo definido
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image source={require('../../assets/images/logo.png')}  style={{ width: 200, height: 200, resizeMode: 'contain' }} />
        
        {/* Renderizando a tela de Login */}
        <LoginScreen />
        
        {/* Botão para "Esqueceu a senha?" */}
        <TouchableOpacity onPress={() => navigation.navigate('TelaDeRecuperacao')}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaProvider>
  );
}

// Estilos para a tela
const styles = StyleSheet.create({
  forgotPassword: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
});
