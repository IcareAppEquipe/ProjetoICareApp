import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones do Expo

export default function SocialBar() {
  return (
    <View style={styles.container}>
     
      <TouchableOpacity style={styles.button} onPress={() => alert('Facebook Pressionado!')}>
        <Ionicons name="logo-facebook" size={24} color="#3b5998" />
      </TouchableOpacity>

     
      <TouchableOpacity style={styles.button} onPress={() => alert('LinkedIn Pressionado!')}>
        <Ionicons name="logo-linkedin" size={24} color="#0077b5" />
      </TouchableOpacity>

      
      <TouchableOpacity style={styles.button} onPress={() => alert('Google Pressionado!')}>
        <Ionicons name="logo-google" size={24} color="#db4437" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Disposição horizontal dos botões
    justifyContent: 'space-around', // Espaço uniforme entre os botões
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa', // Cor de fundo da barra
    position: 'absolute', // Posicionamento fixo
    bottom: 0, // Fixa no rodapé
    width: '100%', // Largura total da tela
  },
  button: {
    padding: 10, // Espaçamento interno do botão
    borderRadius: 50, // Bordas arredondadas
    backgroundColor: '#ffffff', // Fundo branco
    shadowColor: '#000', // Sombras (opcional)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombras para Android
  },
});
