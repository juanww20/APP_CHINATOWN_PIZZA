import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable, TextInput, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from 'react-native-vector-icons/Ionicons';
import InitialHome from "./Pages/home";
import Page_Seleccion_sesion from "./Pages/Page_Seleccion_sesion";
import Carrito from "./Pages/Carrito"
import Menu_general from "./Pages/menu";
import pizza_icono from './assets/logo.png'
import Pizza_ejemplo from './Pages/Pizza_ejemplo';
import BillScreen from './Pages/Factura';
import Pagina_Bienvenida from './Pages/Pagina_Bienvenida';
import Bebida_ejemplo from './Pages/Bebida_ejemplo';
import Postre_ejemplo from './Pages/Postre_ejemplo';
import Adicional_ejemplo from './Pages/Adicional_ejemplo';
import Gracias from './Pages/Gracias';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {

  const [cart, setCart] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: false }}>
        <Stack.Screen name="Welcome" component={Pagina_Bienvenida} options={{headerShown:false}} />
        <Stack.Screen name="Menu_general" options={{headerShown:false}}>        
          {(props) => <Menu_general {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Pizza_ejemplo" options={{headerShown:false}}>        
          {(props) => <Pizza_ejemplo {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Bebida_ejemplo" options={{headerShown:false}}>        
          {(props) => <Bebida_ejemplo {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Postre_ejemplo" options={{headerShown:false}}>        
          {(props) => <Postre_ejemplo {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Adicional_ejemplo" options={{headerShown:false}}>        
          {(props) => <Adicional_ejemplo {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Carrito" options={{headerShown:false}}>        
          {(props) => <Carrito {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        <Stack.Screen name="Bill" component={BillScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Gracias" options={{headerShown:false}}>
        {(props) => <Gracias {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
