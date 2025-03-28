import React from 'react';
import { View, Text, Pressable,StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from '../assets/logo.png'
const Pagina_Bienvenida = () => {
  const navigation = useNavigation();

  const Entrar_menu = () => {
    navigation.navigate('Menu_general');
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.letras_espanol}>Bienvenidos!</Text>
      <Text style={styles.letras_espanol}>¡Callejera, sabrosa y auténtica pizza! 🍕！</Text>
      <Image source={logo} style={styles.imagen_logo}></Image>
      <Text style={styles.letras}>欢迎光临！</Text>
      <Text style={styles.letras}>特别是可爱聪明的Maria老师!</Text>

      <Pressable style={styles.boton} onPress={Entrar_menu}>
        <Text>¡Comprar!</Text>
      </Pressable>
    </View>
  );
};

export default Pagina_Bienvenida;

const styles = StyleSheet.create({
  contenedor:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor:'black',
  },
  letras:{
    fontSize: 24, 
    marginBottom: 20,
    color:'white'
  },
  letras_espanol:{
    fontSize:18,
    marginBottom: 10,
    color:'white'
  },
  boton:{
    width:150,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
    backgroundColor:'orange',
  },
  imagen_logo:{
    width:300,
    height:250,
  }
})

