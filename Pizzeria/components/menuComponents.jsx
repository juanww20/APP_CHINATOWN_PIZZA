
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { pizzaImages } from '../data/map';

function importAll(r) {
    let images = {};
    r.keys().forEach((key) => (images[key] = r(key)));
    return images;
}

const images = importAll(require.context('./assets/menu/pizzas/', false, /\.(png|jpe?g|svg)$/));

export function MenuSectionButton({imagen, texto, id, isSelected, onSelect}) {

    return(
        <Pressable onPress={() => onSelect(id)}>
            <View style={[
                styles.imagen_caja,
                isSelected && styles.selected
                ]}>
                <Image source={imagen} style={styles.imagen}></Image>
                <Text style={styles.texto}>{texto}</Text>
            </View>
        </Pressable>
    );
}

export function MenuProduct({ item }) {
    return (
        <View style={styles.productContainer}>
            <Image source={pizzaImages[item.imageName]} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productIngredients}>
                    {Array.isArray(item.ingredients) ? item.ingredients.join(', ') : item.ingredients}
                </Text>
                <Text style={styles.productPrice}>${Array.isArray(item.price) ? item.price[1] : item.price}</Text>
            </View>
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    imagen_caja:{
        width:80,
        height:120,
        borderWidth: 2,
        borderRadius: 10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        borderColor:'transparent',
        gap: 5,
        backgroundColor:'#1f1f1f',
    },
    selected:{
        borderColor:'#FF3B3B',
    },
    imagen:{
        width: 60,
        height: 60,
        borderRadius: 10,
        sizeMode: 'stretch',
    },
    texto:{
        fontSize: 12,
        fontWeight: 500,
        color: '#F5F5F5',
    },
    productContainer: {
        width: 350,
        height: 100,
        backgroundColor: '#1f1f1f',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 5,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    productDetails: {
        flex: 1,
        marginLeft: 10,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#F5F5F5',
    },
    productIngredients: {
        fontSize: 12,
        color: '#A0A0A0',
    },
    productPrice: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#FF3B3B',
    },
    addButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#FF3B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontSize: 18,
        color: '#F5F5F5',
    },
});