import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity, ScrollView } from 'react-native';

const Tela3 = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de autenticação simples
    if (email === 'admin' && password === '1234') {
      Alert.alert('Login bem-sucedido');
      navigation.navigate('Home'); // Ir para a tela principal (Home) após o login
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  };
  const nav = useNavigation();
  function mudarCadastro() {
    nav.navigate('Cadastro')
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Haute Couture</Text>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.title}>ACESSE A SUA CONTA</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry
          />
          <TouchableOpacity
            style={{ alignSelf: 'center', marginTop: 20, borderWidth: 1, width: 180, height: 40 }}>
            <Text style={{ alignSelf: 'center', marginTop: 10 }}>INICAR SESSÃO</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.title}>PRECISA DE UMA CONTA?</Text>
          <TouchableOpacity
            onPress={mudarCadastro} // Correção: onPress chamando mudarCadastro diretamente
            style={{ alignSelf: 'center', marginTop: 20, borderWidth: 1, width: 180, height: 40 }}>
            <Text style={{ alignSelf: 'center', marginTop: 10 }}>REGISTRE-SE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginTop: 30,
    marginBottom: 24,
    color: '#000467',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginTop: 10
  },
  text: {
    fontSize: 35,
    color: '#000467',
    borderWidth: 1,
    borderColor: '#950000',
    alignSelf: 'center',
    fontFamily: 'Bodoni Moda SC'
  },
});

export default Tela3;
