import React from 'react';
import { View, Text, Button,Pressable } from 'react-native';

export default function Factura({ func, cost }) {
    return (
        <View style={{ flex: 1, justifyContent: 'space-between', backgroundColor: 'red' }}>
            <View>
                <Text style={{ fontSize: 24, padding: 10 }}>Factura</Text>
                <Text>Factura ID: {billId}</Text>
                {Object.values(cart).map((item) => (
                    <View key={item.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
                        <Text>
                            {item.name} x{item.quantity} - ${item.price * item.quantity} (${item.price} c/u)
                        </Text>
                    </View>
                ))}
                <Text style={{ padding: 10, fontSize: 20 }}>Total: ${cost}</Text>
            </View>
            <Button title="Pagar" onPress={func} style={{ padding: 10 }} />
        </View>
    );
}
 