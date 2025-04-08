import React from 'react';
import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Productimages} from '../data/map.js';

export function CarritoProduct({ item , Eliminar }) {
    return (
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
    )
}

const styles = StyleSheet.create({
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