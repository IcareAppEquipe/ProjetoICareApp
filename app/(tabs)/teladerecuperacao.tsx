// /screens/TelaDeRecuperacao.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaDeRecuperacao = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperação de Senha</Text>
      <TextInput placeholder="Digite seu e-mail" style={styles.input} />
      <Button title="Recuperar senha" onPress={() => { /* Lógica de recuperação */ }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
  },
});

export default TelaDeRecuperacao;
