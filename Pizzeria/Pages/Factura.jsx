import React, {useState} from 'react';
import { View, Text, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAndIncrementBillId } from '../functions/billIdManager';
import { Factura, MetodoDePago } from '../components/factura';
import { CasualButton } from '../components/generals';
import { generateInvoiceMessage } from '../functions/formatMessage';
import { sendWhatsApp } from '../functions/sendWhatsApp';
import { Dropdown } from '../components/generals';

const BillScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart = {}, clientInfo = {} } = route.params || {}; // Agrega clientInfo
  const billId = getAndIncrementBillId();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Estado para el método de pago

  const Funcion_Pagar = () => {
    // First validate if payment method is selected
    if (!selectedPaymentMethod) {
      alert('Por favor selecciona un método de pago');
      return;
    }

    alert('感谢购买! Gracias por la compra!');

    // Reset cart and navigate
    navigation.reset({
      routes: [{ name: 'Carrito', params: { cart: {} } }],
    });

    setTimeout(() => {
      navigation.navigate('Gracias');
    }, 500);

    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);

    // Generate and send WhatsApp message
    const message = generateInvoiceMessage(clientInfo, billId, cart, selectedPaymentMethod);
    sendWhatsApp(message);
  };

  // Validación para cart vacío o undefined
  const totalCost = Object.values(cart).reduce((acc, item) => {
    return acc + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  return (
    <View style={{ height: '100%', backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'space-between' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Text style={{ fontSize: 20, color: '#F5F5F5', textAlign: "center", fontWeight: "bold", marginTop: 10 }}>Facturación</Text>
      <Dropdown 
        data={[{ title: 'Pago Móvil' }, { title: 'Efectivo' }]}
        placeholder={'Método de Pago'}
        onSelect={(item) => setSelectedPaymentMethod(item.title)} // Extrae el título aquí
      />
      <Factura cost={totalCost} billId={billId} cart={cart} clientInfo={clientInfo}/>
      <CasualButton texto="Pagar" func={Funcion_Pagar} disabled={!selectedPaymentMethod} estilo={{ opacity: selectedPaymentMethod ? 1 : 0.5 }} />
    </View>
  );
};

export default BillScreen;
//