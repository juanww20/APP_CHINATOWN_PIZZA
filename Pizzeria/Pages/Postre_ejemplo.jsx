import { Pressable, Text, View, StyleSheet, FlatList, Button, Image } from 'react-native'
import React, { Component } from 'react'

const Pizzas = [
  { id: 9, name: 'Torta', price: 7, image: require('../assets/Pizza/torta.png') },
];

const Postre_ejemplo = ({ navigation, cart, setCart }) => {

  const volver_pagina_anterior = () => {
    navigation.goBack();
  }

  const AgregaParaPedido = (pizza) => {
    const Pedido_existido = cart[pizza.id];
    if (Pedido_existido) {
      setCart({
        ...cart,
        [pizza.id]: { ...Pedido_existido, quantity: Pedido_existido.quantity + 1 },
      },
        console.log("Agregado pizza"));
    } else {
      setCart({ ...cart, [pizza.id]: { pizza, quantity: 1 } });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.contenedor}>
      <Pressable style={styles.boton_volver} onPress={volver_pagina_anterior}>
        <Text>
          Volver Pagina Anterior
        </Text>
      </Pressable>
      <View style={styles.contenedor_producto}>
        <FlatList
          data={Pizzas}
          renderItem={({ item }) => (
            <View style={styles.producto_individual}>
              <Image source={item.image} style={styles.producto_imagen} />
              <View style={styles.producto_descripcion}>
                <Text style={styles.producto_nombre}>{item.name}</Text>
                <Text style={styles.producto_precio}>${item.price}</Text>
              </View>
              <Pressable onPress={() => AgregaParaPedido(item)} style={styles.boton_agregar}>
                <Text style={{color:'white'}}>Agregar</Text>
              </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  )
}

export default Postre_ejemplo

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  boton_volver: {
    width: 330,
    height:60,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contenedor_producto: {
    width: 330,
    marginTop: 10,
  },
  producto_individual: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 5
  },
  producto_descripcion: {
    flex: 1
  },
  producto_imagen: {
    width: 50,
    height: 50,
    marginRight: 5
  },
  producto_nombre: {
    fontSize: 16
  },
  producto_precio: {
    color: 'gray',
    fontSize: 14
  },
  boton_agregar:{
    width:90,
    height:50,
    backgroundColor:'orange',
    justifyContent:'center',
    alignItems:'center'
  }
})