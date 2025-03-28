import { Text, View, Image, StyleSheet, Pressable, TextInput, StatusBar} from 'react-native'
import React, { Component } from 'react'
import pizza_icono from '../assets/logo.png'

const InitialHome = () => {
    const [text, setText] = React.useState("");

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
            <Text style={styles.title}>¡Callejera, sabrosa y auténtica pizza! 🍕</Text>
            <View style={styles.caja_imagen}>
                <Image source={pizza_icono} style={styles.imagen} />
            </View>

            <TextInput
                style={styles.input}
                placeholder='Ingresa tu Nombre'
                value={text}
                onChangeText={setText} // Usamos onChangeText en lugar de onChange
                placeholderTextColor={'gray'}
            />

            <Pressable style={styles.boton}>
                <Text style={styles.letra_blanco}>Siguiente</Text>
            </Pressable>
            

            <Text style={styles.infotext}>Estás en la mesa #1</Text>
        </View>
    );
};


export default InitialHome

const styles = StyleSheet.create({
    title: {
        fontFamily: "Arial",
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 60,
        color:'#1e1e1e',
        textAlign:'left',
        width:'90%',
        color: '#F5F5F5'
    },

    input:{
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#F5F5F5',
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: '#F5F5F5',
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1A1A1A"
    },
    caja_imagen:{
        width:250,
        height:250,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:80,
    },
    imagen:{
        width:400,
        height:300,
    },
    boton:{
        width:'80%',
        height:'7%',
        backgroundColor:'#FF3B3B',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 10,
        marginBottom:10,
        borderColor:'#FF3B3B',
    },
    boton_2:{
        width:'80%',
        height:'8%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:1,
        borderRadius: 10,
        borderColor: 'gray',
    },
    letra_blanco:{
        color:'white'
    },

    infotext:{
        color:'gray',
        fontSize: 15,
    }
})