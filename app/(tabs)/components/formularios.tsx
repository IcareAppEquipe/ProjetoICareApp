import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Formulário de Login
export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem Vindo ao ICare</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

// Formulário de Cadastro
export const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    console.log(`Nome: ${name}, Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se na ICare</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a sua senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Cadastrar" onPress={handleSignUp} />
    </View>
  );
};

// Formulário de Contato
export const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    console.log(`Mensagem: ${message}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva sua mensagem"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
};

// Estilos compartilhados
const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
