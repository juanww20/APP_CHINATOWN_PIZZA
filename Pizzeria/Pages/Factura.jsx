import React from 'react';
import { View, Text, Button,Pressable } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAndIncrementBillId } from '../Funcionalidad/billIdManager';


const BillScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart } = route.params;
  const billId = getAndIncrementBillId();

  const Funcion_Pagar = () => {
    alert('感谢购买! Gracias por la compra!');

    navigation.reset({
      routes: [{ name: 'Carrito', params: { cart: {} } }],
    })

    setTimeout(() => {
      navigation.navigate('Gracias');
    }, 500);

    setTimeout(() => {
        navigation.navigate('Welcome');
      }, 5000);
  };

  const totalCost = Object.values(cart).reduce((acc, item) => acc + item.pizza.price * item.quantity, 0);

  return (
    <View style={{ flex: 1, justifyContent: 'space-between', marginBottom:20, marginTop:60}}>
      <View>
        <Text style={{ fontSize: 24, padding: 10 }}>Factura</Text>
        <Text>Factura ID: {billId}</Text>
        {Object.values(cart).map((item) => (
          <View key={item.pizza.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
            <Text>
              {item.pizza.name} x {item.quantity} - ${item.pizza.price * item.quantity}
            </Text>
          </View>
        ))}
        <Text style={{ padding: 10, fontSize: 20 }}>Total: ${totalCost}</Text>
      </View>
      <Button title="Pagar" onPress={Funcion_Pagar} style={{ padding: 10 }} />
    </View>
  );
};

export default BillScreen;

/**
 * <Pressable>
        <Text>Pagar</Text>
      </Pressable>
      <Pressable>
        <Text>
          Volver
        </Text>
      </Pressable>
 */