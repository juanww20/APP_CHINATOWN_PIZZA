import React, { useState} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carrito from "./Pages/Carrito"
import Menu_general from "./Pages/menu";
import BillScreen from './Pages/Factura';
import Pagina_Bienvenida from './Pages/Pagina_Bienvenida';
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
