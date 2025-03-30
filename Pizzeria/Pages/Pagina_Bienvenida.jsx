import React from 'react';
import { View, Text, Pressable,StyleSheet, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png'
const Pagina_Bienvenida = () => {
  const navigation = useNavigation();

  const Entrar_menu = () => {
    navigation.navigate('Menu_general');
  };

  return (
    <View style={styles.contenedor}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Text style={styles.letras_espanol}>¡Callejera, sabrosa y auténtica pizza! 🍕</Text>
      <Image source={logo} style={styles.imagen_logo}></Image>
      <Pressable style={styles.boton} onPress={Entrar_menu}>
        <Text style={styles.letras_blanco}>Ver Menú</Text>
      </Pressable>
      <Text style={styles.letras}>欢迎光临! 特别是可爱聪明的Maria老师!</Text>
    </View>
  );
};

export default Pagina_Bienvenida;

const styles = StyleSheet.create({
  contenedor:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'#1A1A1A',
  },
  letras:{
    fontSize: 16, 
    marginBottom: 20,
    color:'#F5F5F5'
  },
  letras_espanol:{
    fontSize:30,
    marginBottom: 40,
    color:'#F5F5F5',
    fontWeight:'bold',
    width:'90%',
  },
  boton:{
    width:'90%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:8,
    backgroundColor:'#FF3B3B',
    marginBottom: 5,
  },
  imagen_logo:{
    width:350,
    height:300,
    marginBottom: 25,
  },
  letras_blanco:{
    color:'#F5F5F5',
    fontSize:15,
    fontWeight:'bold',
  },
})

