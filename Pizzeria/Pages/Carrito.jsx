import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet, Pressable, StatusBar} from 'react-native';
import { useNavigation, useRoute} from '@react-navigation/native';

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

  return (
    <View style={{ flex: 1,backgroundColor:'#1A1A1A'}}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Text style={{fontSize:20,color:'#F5F5F5', textAlign:"center"}}>Lista de pedido (～￣▽￣)～</Text>
      <FlatList
        data={Object.values(cart)}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text style={{color:'#F5F5F5'}}>
              {item.name} x {item.quantity} - ${item.price * item.quantity}
            </Text>
            <Pressable onPress={() => Eliminar(item)} style={styles.button_eliminar_dicha_producto}>
              <Text>Quitar</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
        <Pressable onPress={() => navigation.navigate('Menu_general')} style={styles.botoncito_volver}>
          <Text>Volver</Text>
        </Pressable>
        <Pressable onPress={Eliminar_todos} style={styles.botoncito_limpiar}>
          <Text>Limpiar</Text>
        </Pressable>
        <Pressable onPress={Funcion_Pasar_Factura} style={styles.botoncito_confirmar}>
          <Text>Confirmar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Carrito;

const styles = StyleSheet.create({
  botoncito_confirmar:{
    width:80,
    height:40,
    backgroundColor:'#4CAF50',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  botoncito_volver:{
    width:80,
    height:40,
    backgroundColor:'#69cdff', //69cdff
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  botoncito_limpiar:{
    width:80,
    height:40,
    backgroundColor:'#ff8585',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10
  },
  button_eliminar_dicha_producto:{
    backgroundColor:'#ff8585',
    alignItems:'center'
  }
})
