import React, { useState, useEffect} from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable, StatusBar, Image} from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';
import {Productimages} from '../data/map.js';

const Carrito = ({ navigation, cart, setCart }) => {
  const route = useRoute();

  useEffect(() => {
    if (route.params?.cart) {
      setCart(route.params.cart);
    }
  }, [route.params, setCart]);

  const Eliminar = (item) => {
    const newCart = { ...cart };
    delete newCart[item.id];
    setCart(newCart);
  };

  const Eliminar_todos = () => {
    setCart({});
  };

  const Funcion_Pasar_Factura = () => {
    navigation.navigate('Bill', { cart });
  };

  const totalCost = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <View style={{ flex: 1,backgroundColor:'#1A1A1A', alignItems:'center'}}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Text style={{fontSize:20,color:'#F5F5F5', textAlign:"center", fontWeight:"bold"}}>Lista de pedido</Text>
      <FlatList
        data={Object.values(cart)}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image
              source={Productimages[item.imageName]}
              style={{width: 50, height: 50, resizeMode: 'stretch'}}
              />
            <Text style={{color:'#F5F5F5', fontSize: 12, width: '60%'}}>
              {item.name} x{item.quantity} - ${item.price * item.quantity} (${item.price} c/u)
            </Text>
            <Pressable onPress={() => Eliminar(item)} style={styles.button_eliminar_dicha_producto}>
              <Image 
              source={require('../assets/delete.png')}
              style={{width: 30, height: 30}}
              />
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20, width:'100%'}}
        contentContainerStyle={{ alignItems: 'center' }}
      />
      <Text style={{ padding: 10, fontSize: 20, color: '#F5F5F5', borderTopWidth: 1, borderTopColor:'#F5F5F5'}}>Total: ${totalCost}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, width: '50%', gap: 10}}>
        <Pressable onPress={Eliminar_todos} style={styles.boton}>
          <Text style={{color:'#F5F5F5'}}>Limpiar</Text>
        </Pressable>
        <Pressable onPress={Funcion_Pasar_Factura} style={styles.boton}>
          <Text style={{color:'#F5F5F5'}}>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  boton:{
    width:'100%',
    height:50,
    backgroundColor:'#FF3B3B',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  button_eliminar_dicha_producto:{
    backgroundColor:'#FF3B3B',
    alignItems:'center',
    width:40,
    height: 40,
    justifyContent:'center',
    borderRadius: 10,
  },
  productContainer: {
    width: '95%',
    height: '100',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 10,
    backgroundColor: '#1f1f1f',
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
