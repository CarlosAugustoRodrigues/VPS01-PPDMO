import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const PagLogin = ({ navigation }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [localizacao, setLocalizacao] = useState("");

  const [focusedTitulo, setFocusedTitulo] = useState(false);
  const [focusedDescricao, setFocusedDescricao] = useState(false);
  const [focusedData, setFocusedData] = useState(false);
  const [focusedLocalizacao, setFocusedLocalizacao] = useState(false);

  const login = () => {
    // Lógica de login aqui
    console.log('Login:', { email, password });
  };

  return (
    <SafeAreaProvider style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.text}>Registrar Viagem</Text>

        <SafeAreaView style={styles.form}>
          <TextInput
            style={[styles.input, focusedTitulo && styles.inputFocused]}
            onChangeText={setTitulo}
            placeholder="Titulo"
            value={titulo}
            onFocus={() => setFocusedTitulo(true)}
            onBlur={() => setFocusedTitulo(false)}
          />
          <TextInput
            style={[styles.input, styles.descricao, focusedDescricao && styles.inputFocused]}
            onChangeText={setDescricao}
            value={descricao}
            placeholder="Descrição"
            onFocus={() => setFocusedDescricao(true)}
            onBlur={() => setFocusedDescricao(false)}
          />

          <TextInput
            style={[styles.input, focusedData && styles.inputFocused]}
            onChangeText={setData}
            value={data}
            placeholder="Data"
            onFocus={() => setFocusedData(true)}
            onBlur={() => setFocusedData(false)}
          />

          <TextInput
            style={[styles.input, focusedLocalizacao && styles.inputFocused]}
            onChangeText={setLocalizacao}
            value={localizacao}
            placeholder="Localização"
            onFocus={() => setFocusedLocalizacao(true)}
            onBlur={() => setFocusedLocalizacao(false)}
          />

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistrarViagem')}>
            <Text style={styles.buttonText}>Registrar Viagem</Text>
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
  descricao: {
    height: '10vh'
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
});

export default PagLogin;
































// FEITO POR CARLOS AUGUSTO RODRIGUES