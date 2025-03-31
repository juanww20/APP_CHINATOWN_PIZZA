import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';

export function CasualButton({ texto,  func }) {
    return(
        <Pressable onPress={func} style={[styles.boton]}>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{texto}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    boton:{
        width:'90%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#FF3B3B',
        marginBottom: 15,
    },
})