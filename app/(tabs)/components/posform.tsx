import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation, NavigationProp } from '@react-navigation/native';


import SocialBar from './socialbar'
// Definir os tipos de parâmetros para o Stack Navigator
type RootStackParamList = {
  Login: undefined;
  TelaDeRecuperacao: undefined; // ou os parâmetros necessários para a tela de recuperação
};

// Criação do Stack Navigator
const Stack = createStackNavigator<RootStackParamList>();

export default function PosformCadastro() {
  // Tipar a navegação usando o tipo definido
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <SocialBar/>
      </View>
    </SafeAreaProvider>
  );
}
export function PosformLogin() {
    // Tipar a navegação usando o tipo definido
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SocialBar/>
        </View>
      </SafeAreaProvider>
    );
  }

  export function PosformRecuperacao() {
    // Tipar a navegação usando o tipo definido
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
    return (
      <SafeAreaProvider>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <SocialBar/>
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
