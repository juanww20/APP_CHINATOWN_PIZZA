import React from 'react';
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function Factura({ cost, billId, cart, clientInfo }) {
    return (
        <View style={{ height: '50%', backgroundColor: 'white', alignItems: 'center', justifyContent: 'space-between', width: '75%', borderRadius: 10}}>
            <ScrollView style={{ backgroundColor: '#F5F5F5', width: '100%', borderRadius: 10}} contentContainerStyle={{ justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 24, padding: 10 }}>Factura</Text>
                <Text style={{paddingLeft: 7}}>ID: #{billId}</Text>
                
                {/* Agrega esta sección para mostrar la información del cliente */}
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                    <Text style={{ fontWeight: 'bold' }}>Información del Cliente:</Text>
                    <Text>Orden: {clientInfo.orden || 'No especificado'}</Text>
                    <Text>Nombre: {clientInfo.nombre || 'No especificado'}</Text>
                    <Text>Teléfono: {clientInfo.telefono || 'No especificado'}</Text>
                    <Text>Ubicación: {clientInfo.ubicacion || 'No especificado'}</Text>
                </View>
                
                {Object.values(cart).map((item) => (
                    <View key={item.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                        <Text>
                            {item.name} x{item.quantity} - ${item.price * item.quantity} (${item.price} c/u)
                        </Text>
                    </View>
                ))}
                <Text style={{ padding: 10, fontSize: 20 }}>Total: ${cost}</Text>
            </ScrollView>
        </View>
    );
}