import React from 'react';
import { View, Text, Linking, Platform, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getAndIncrementBillId } from '../functions/billIdManager';
import { Factura, MetodoDePago } from '../components/factura';
import { CasualButton } from '../components/generals';

const BillScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { cart = {} } = route.params || {}; // Validación para cart
  const billId = getAndIncrementBillId();

  const Funcion_Pagar = () => {
    alert('感谢购买! Gracias por la compra!');

    navigation.reset({
      routes: [{ name: 'Carrito', params: { cart: {} } }],
    });

    setTimeout(() => {
      navigation.navigate('Gracias');
    }, 500);

    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 5000);
  };

  const sendWhatsApp = () => { // Corregido: declaración correcta
    Funcion_Pagar();
    let msg = "type something";
    let phoneWithCountryCode = "";
  
    let mobile = Platform.OS == "ios" ? phoneWithCountryCode : "+" + phoneWithCountryCode;
    if (mobile) {
      if (msg) {
        let url = "whatsapp://send?text=" + msg + "&phone=" + mobile;
        Linking.openURL(url)
          .then(data => {
            console.log("WhatsApp Opened");
          })
          .catch(() => {
            alert("Make sure WhatsApp installed on your device");
          });
      } else {
        alert("Please insert message to send");
      }
    } else {
      alert("Please insert mobile no");
    }
  };

  // Validación para cart vacío o undefined
  const totalCost = Object.values(cart).reduce((acc, item) => {
    return acc + (item?.price || 0) * (item?.quantity || 0);
  }, 0);

  return (
    <View style={{ height: '100%', backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'space-between' }}>
      <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
      <Text style={{ fontSize: 20, color: '#F5F5F5', textAlign: "center", fontWeight: "bold", marginTop: 10 }}>Facturación</Text>
      <MetodoDePago />
      <Factura cost={totalCost} billId={billId} cart={cart} />
      <CasualButton texto="Pagar" func={sendWhatsApp} />
    </View>
  );
};

export default BillScreen;