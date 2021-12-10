import axios from 'axios';
import jwtDecode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  FlatList,
  View,
} from 'react-native';

import api from '../services/api';
//Continuar
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaConsultas: [],
      usuarioAtual: ''
    };
  };

  buscarConsultas = async () => {
    const tokenUsuario = await AsyncStorage.getItem("userToken")
    console.warn('token do usuário')
    console.warn(tokenUsuario)

    const resposta = await api.get('/consultas/minhas',{
      headers: {
        Authorization : 'Bearer ' + tokenUsuario
      }
    });
    console.warn('resposta')
    console.warn(resposta)
    const dadosApi = resposta.data;
    
    this.setState({ 
      listaConsultas: dadosApi,
      usuarioAtual: jwtDecode(tokenUsuario).role
    });

    // console.warn()

  }

  componentDidMount() {
    this.buscarConsultas();
  }

  render() {
    return (
      
      // this.state.usuarioAtual === '3' && (
      //   <View>
      //     <Text>Paciente</Text>
      //   </View>
      // ),

      // this.state.usuarioAtual === '2' && (
      //   <View>
      //     <Text>Médico</Text>
      //   </View>
      // )

      <View style={styles.main}>
        {/* Cabeçalho - Header */}
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require('../assets/img/consulta.png')}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>{'Consultas'.toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />

          <Text style = {styles.nomeConsulta}>Paciente: <Text> </Text></Text>
        </View>


        {/* Corpo - Body */}
        <View style={styles.mainBody}>
          <FlatList
            contentContainerStyle={styles.mainBodyContent}
            data={this.state.listaConsultas}
            keyExtractor={item => item.idConsulta}
            renderItem={this.renderItem}
          />


        </View>
      </View>
      
    );
  }


  renderItem = ({ item }) => (
    <View style={styles.cardConsulta}>


      <View style={styles.mainInfoCard}>
        <View style={styles.dataInfo}>
          <Text style={styles.chave}>​Data da consulta: <Text style={styles.valor}>{Intl.DateTimeFormat("pt-BR", {
            year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric"
          }).format(new Date(item.dataConsulta))}</Text></Text>

        </View>

        <View style={styles.pacInfo}>
          <Text style={styles.chave}>Paciente: </Text>
          <Text style={styles.valor}>​{(item.idClienteNavigation.nomeCliente)}</Text>
        </View>

        <View style={styles.medInfo}> 
          <Text style={styles.chave}>Medico: <Text style={styles.valor}>{(item.idMedicoNavigation.nomeMedico)}</Text> </Text>
          
        </View>

        <View style={styles.espInfo}>
          <Text style={styles.chave}>Especialidade:  <Text style={styles.valor}>{(item.idMedicoNavigation.idEspecialidadeMedicoNavigation.nomeEspecialidade)}</Text></Text>

        </View>

        <View style={styles.sitInfo}>
          <Text style={styles.chave}>Situação: <Text style={styles.valor}>{(item.idSituacaoNavigation.tipoSituacao)}</Text></Text>
          {/* <Text style={styles.chave}> ​{item.idSituacaoNavigation.situacao1} </Text> */}
        </View>

        {/* <View style={styles.addInfoCard}> <SituacaoConsulta situacao={item.idSituacaoNavigation.situacao1}>

          <Text style={styles.chave}> ​{item.idSituacaoNavigation.situacao1} </Text>
             
             </View>
        </View> */}

      </View>
    </View>


  )
}


const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: '#CFDCFF',
  },

  mainHeader: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center'
  },

  mainHeaderRow: {
    flexDirection: 'row',
  },
  
  // texto do cabeçalho
  mainHeaderText: {
    fontSize: 16,
    letterSpacing: 5,
    color: '#000',
  },
  // linha de separação do cabeçalho
  mainHeaderLine: {
    width: 220,
    paddingTop: 10,
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },

  nomeConsulta: {
    marginTop: 35,
  },

  // conteúdo do body
  mainBody: {
    flex: 1,
  },
  // conteúdo da lista
  mainBodyContent: {

    width: '100%',
    // width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    alignItems: "center"

  },

  cardConsulta: {
    // ​        ​width​: ​"80%"​, 
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 20,
    height: 150,
    backgroundColor: "#ACC6E7",
    flexDirection: "row",
    borderRadius: 25,
    paddingLeft: 20,
    paddingBottom: 20,

  },

  mainInfoCard: {
    flex: 2
  },
  addInfoCard: {
    flex: 1,
    alignItems: "center",
    height: "90%",
    justifyContent: "center"
  },

  chave: {
    color: "#000",
    fontSize: 14,
    
  },
  valor: {
    color: "#000",
    fontSize: 14,
  },
  dataInfo: {
    marginBottom: 8,
    justifyContent: "center",
    
  },
  pacInfo: {
    flexDirection: "row",
    marginBottom: 8,
    // justifyContent:"center", 
    alignItems: "center"
  },
  medInfo: {
    flexDirection: "row",
    marginBottom: 10,
    // justifyContent:"center", 
    alignItems: "center"
  },
  espInfo: {
    flexDirection: "row",
    marginBottom: 10,
    // justifyContent:"center", 
    alignItems: "center"
  },



});

export default App;
