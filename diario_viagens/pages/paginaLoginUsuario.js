import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const PagLogin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);

  const login = () => {
    // Lógica de login aqui
    console.log('Login:', { email, password });
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Login</Text>

        <SafeAreaView style={styles.form}>
          <TextInput
            style={[styles.input, focusedEmail && styles.inputFocused]}
            onChangeText={setEmail}
            placeholder="E-mail"
            value={email}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
          />
          <TextInput
            style={[styles.input, focusedPassword && styles.inputFocused]}
            onChangeText={setPassword}
            value={password}
            placeholder="Senha"
            secureTextEntry
            keyboardType="default"
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistrarViagem')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Registrar')}>
            <Text style={styles.linkText}>Não tem uma conta? Cadastre-se aqui</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(30, 30, 30)',
    width: '100vw',
    height: '100vh'
  },
  text: {
    color: 'rgb(255, 50, 50)',
    fontSize: 50,
    fontWeight: 'bolder',
    marginBottom: 40,
  },
  form: {
    width: '20%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    padding: 10,
    color: 'white',
    width: '100%',
    marginBottom: 20,
  },
  inputFocused: {
    borderColor: 'transparent',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgb(255, 50, 50)',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    marginTop: 20,
  },
  linkText: {
    color: 'rgb(255, 255, 255)',
    textDecorationLine: 'underline',
  },
});

export default PagLogin;
































// FEITO POR CARLOS AUGUSTO RODRIGUES