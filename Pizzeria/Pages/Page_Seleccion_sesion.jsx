import { Text, View, StyleSheet, TextInput, Pressable, Image } from 'react-native'
import React, { Component } from 'react'
import facebook from '../image/facebook icon.png'
import google from '../image/google icon.png'

export class Page_Seleccion_sesion extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto_titulo}>¡Que bueno es verte de nuevo!</Text>

                <TextInput placeholder='Correo Electrónico' style={styles.input_ingreso}></TextInput>
                <TextInput placeholder='Contraseña' style={styles.input_ingreso}></TextInput>

                <Pressable>
                    <Text>¿Olvidaste tu contraseña?</Text>
                </Pressable>

                <Pressable style={styles.boton_inicia_sesion}>
                    <Text>Inicia Sesión</Text>
                </Pressable>

                <View style={styles.container_para_orloginwith}>
                    <View style={styles.linea}></View>
                    <Text style={styles.texto_orloginwith}>Or Login with</Text>
                    <View style={styles.linea}></View>
                </View>

                <View style={styles.seleccion_servicio_tipo_ingresar}>
                    <View style={styles.imagen_caja}>
                        <Image source={facebook} style={styles.imagen}></Image>
                    </View>
                    <View style={styles.imagen_caja}>
                        <Image source={google} style={styles.imagen}></Image>
                    </View>
                </View>

                
            </View>
        )
    }
}

export default Page_Seleccion_sesion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto_titulo: {
        fontSize: 32,
        fontWeight: 500,
    },
    input_ingreso: {
        width: '80%',
        padding: 10,
        backgroundColor: '#f4f4f4',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        margin: 10
    },
    boton_inicia_sesion: {
        width: '80%',
        height: 50,
        backgroundColor: '#5b4ecf',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: '#5b4ecf',
    },
    container_para_orloginwith: {
        flexDirection: 'row',
        alignItems: 'center',
        height:50,
    },
    linea: {
        height: 2,
        width: 100, 
        backgroundColor: 'gray', 
        marginHorizontal: 10, 
    },
    texto_orloginwith: {
        fontSize: 16,
        color: 'black',
    },
    seleccion_servicio_tipo_ingresar:{
        flexDirection:'row',
        alignItems:'center',
        width:330,
        height:100,
        justifyContent:'space-around', 
    },
    imagen_caja:{
        width:100,
        height:80,
        borderWidth: 1,
        borderRadius: 10,
        borderColor:'#5b4ecf',
        alignItems:'center',
        justifyContent:'center'
    },
    imagen:{
        width:56,
        height:56,
    }
})