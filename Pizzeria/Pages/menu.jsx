import { Text, View, ScrollView, StyleSheet, Image, FlatList, StatusBar, Pressable} from 'react-native'
import React, { Component } from 'react'
import pizzas from '../assets/pizzas.png'
import bebidas from '../assets/bebidas.png'
import ensaladas from '../assets/ensaladas.png'
import postres from '../assets/postres.png'
import adicionales from '../assets/adicionales.png'
import {MenuSectionButton, MenuProduct} from '../components/menuComponents'
import datos from '../data/menuData.json'


export default function Menu_general({navigation}) {
        const [selectedId, setSelectedId] = React.useState(0);

        const toogleSelection = (id) => {
            if(selectedId === id) return;
            else setSelectedId(id)
        }

        const [data, setData] = React.useState([]);

        React.useEffect(() => {
            setData(datos.pizzas); // Asigna los datos del JSON al estado
        }, []);

        return (
            <ScrollView>
            <View style={styles.contenedor}>
                <View>
                    <Text style={{fontSize:32}}> o(*￣▽￣*)ブ Ménu</Text>
                </View>
                <View>
                    <Text style={{fontFamily:'Arial',fontSize:20}}>¿Qué quiere para hoy? 👍</Text>
                </View>
                <View style={styles.contenedor_opcion}>
                <View>
                    <Pressable style={styles.boton_pizza} onPress={() => navigation.navigate('Pizza_ejemplo')}>
                        <Image source={pizzas} style={styles.imagen}></Image>
                        <Text style={{fontSize:12}}>Pizzas</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.boton_pizza} onPress={() => navigation.navigate('Bebida_ejemplo')}>
                        <Image source={bebidas} style={styles.imagen}></Image>
                        <Text style={{fontSize:12}}>Bebidas</Text>
                    </Pressable>
                </View>
                </View>

                <View style={styles.contenedor_opcion}>
                <View>
                    <Pressable style={styles.boton_pizza} onPress={() => navigation.navigate('Postre_ejemplo')}>
                        <Image source={postres} style={styles.imagen}></Image>
                        <Text style={{fontSize:12}}>Postres</Text>
                    </Pressable>
                </View>
                <View>
                    <Pressable style={styles.boton_pizza} onPress={() => navigation.navigate('Adicional_ejemplo')}>
                        <Image source={adicionales} style={styles.imagen}></Image>
                        <Text style={{fontSize:12}}>Adicionales</Text>
                    </Pressable>
                </View>
                </View>

                <View>
                    <Pressable style={styles.boton_para_carrito} onPress={() => navigation.navigate('Carrito')}>
                        <Text style={{fontSize:20}}>Revisar Pedido 📃</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
        )
    }


const styles = StyleSheet.create({
    contenedor: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
    },
    boton_pizza:{
        width:120,
        height:150,
        margin:10,
        backgroundColor:'orange',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    },
    imagen:{
        width:75,
        height:90,
        resizeMode:'cover'
    },
    contenedor_opcion:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    boton_para_carrito:{
        width:200,
        height:50,
        margin:10,
        backgroundColor:'#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
    }
})