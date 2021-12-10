import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'henrique@gmail.com',
      senha: 'henrique123',
    };
  }
  //como vamos trabalhar com assync historage,
  //nossa funcao tem que ser async.
  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/login/login', {
      email: this.state.email, //ADM@ADM.COM
      senha: this.state.senha, //senha123
    });

   

    //agora sim podemos descomentar.

    if (resposta.status == 200) {
      console.warn
       //mostrar no swagger para montar.
    const token = resposta.data.token;

    console.warn(token);
    await AsyncStorage.setItem('userToken', token);
      this.props.navigation.navigate('Consulta');
      
    }

    

    //
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/img/login.png')}
        style={StyleSheet.absoluteFillObject}>
        {/* retangulo roxo */}
        <View style={styles.overlay} />
        <View style={styles.main}>
          <Image
            source={require('../assets/img/diagnostico.png')}
            style={styles.mainImgLogin}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="Nome de usuario"
            placeholderTextColor="#999"
            keyboardType="email-address"
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={email => this.setState({email})}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="Senha"
            placeholderTextColor="#999"
            keyboardType="default" //para default nao obrigatorio.
            secureTextEntry={true} //proteje a senha.
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={senha => this.setState({senha})}
          />

          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.realizarLogin}>
            <Text style={styles.btnLoginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  //antes da main
  overlay: {
    ...StyleSheet.absoluteFillObject, //todas as prop do styleShhet, e vamos aplica o abosluteFIL...
    backgroundColor: 'rgba(196,197,248,0.70)', //rgba pq vamos trabalhar com transparencia.
  },

  // conteúdo da main
  main: {
    // flex: 1,
    //backgroundColor: '#F1F1F1', retirar pra nao ter conflito.
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  mainImgLogin: {
    // tintColor: '#FFF', //confirmar que sera branco
    // height: 100, //altura
    // width: 90, //largura img nao é quadrada
    margin: 60, //espacamento em todos os lados,menos pra cima.
    marginTop: 0, // tira espacamento pra cima
  },

  inputLogin: {
    width: 280,
    marginBottom: 40, //espacamento pra baixo
    fontSize: 18,
    color: '#000', 
    borderBottomColor: '#000', //linha separadora
    borderBottomWidth: 3, //espessura.
  },

  btnLoginText: {
    fontSize: 20, //aumentar um pouco
    fontFamily: 'Open Sans Light', //troca de fonte
    color: '#000', //mesma cor identidade
    letterSpacing: 3, //espacamento entre as letras
    textTransform: 'uppercase', //estilo maiusculo
  },
  btnLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 200,
    backgroundColor: 'rgba(211,242,247,0.70)',
    borderColor: 'rgba(211,242,247,0.70)',
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {height: 1, width: 1},
  },
});