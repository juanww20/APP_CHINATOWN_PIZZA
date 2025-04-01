import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';
import {Productimages} from '../data/map.js';

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

export function MenuProduct({ item, cart, setCart }) {

    // Dentro de tu componente:
    const [modalVisible, setModalVisible] = useState(false);
    const [lastAddedItem, setLastAddedItem] = useState(null);

    const AgregaParaPedido = (item) => {
        const Pedido_existido = cart[item.id];
        
        if (Pedido_existido) {
            setCart({
                ...cart,
                [item.id]: { 
                    ...Pedido_existido, 
                    quantity: Pedido_existido.quantity + 1 
                }
            });
        } else {
            setCart({ 
                ...cart, 
                [item.id]: { ...item, quantity: 1 } 
            });
        }
        
        // Guarda el último ítem añadido y muestra el modal
        setLastAddedItem(item);
        setModalVisible(true);
        
        // Oculta el modal después de 2 segundos
        setTimeout(() => {
            setModalVisible(false);
        }, 1000);
    };

    return (
        <>
        <Pressable style={styles.productContainer}>
            <Image source={Productimages[item.imageName]} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text 
                    style={styles.productIngredients}
                    numberOfLines={2}  // Limita a 2 líneas
                    ellipsizeMode="tail"  // Agrega "..." al final si el texto se corta
                >
                    {Array.isArray(item.ingredients) ? item.ingredients.join(', ') : item.ingredients}
                </Text>
                <Text style={styles.productPrice}>${Array.isArray(item.price) ? item.price[1] : item.price}</Text>
            </View>
            <Pressable style={styles.addButton}>
                <Text style={styles.addButtonText} onPress={() => AgregaParaPedido(item)}>+</Text>
            </Pressable>
        </Pressable>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
    >
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>¡Producto agregado!</Text>
                    {lastAddedItem && (<Text style={styles.itemText}>{lastAddedItem.name}</Text>)}
                <View style={styles.checkIcon}>
                <Text style={{ fontSize: 30, color: '#F5F5F5'}}>✓</Text>
                </View>
            </View>
        </View>
    </Modal>
    </>
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
        width: 35,
        height: 35,
        borderRadius: 15,
        backgroundColor: '#FF3B3B',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButtonText: {
        fontSize: 18,
        color: '#F5F5F5',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#1A1A1A',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#F5F5F5'
    },
    itemText: {
        fontSize: 16,
        marginBottom: 20,
        color: '#F5F5F5'
    },
    checkIcon: {
        backgroundColor: '#FF3B3B',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    }
});