import { Text, View, StyleSheet, Image} from 'react-native'
import React, { Component } from 'react'
import beautiful from '../assets/logo.png'

const Gracias = ({}) =>{
    return(
        <View style={styles.contenedor}>
            <Image source={beautiful} style={styles.imagen}></Image>
            <Text style={styles.letras}>Gracias! o((oωo ))o</Text>
        </View>
    )
}

export default Gracias

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imagen:{
        width:300,
        height:250
    },
    letras:{
        fontSize:25
    }
})