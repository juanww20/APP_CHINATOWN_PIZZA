import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Carrito from "./Pages/Carrito";
import Menu_general from "./Pages/menu";
import BillScreen from "./Pages/factura";
import Pagina_Bienvenida from "./Pages/Pagina_Bienvenida";
import Gracias from "./Pages/Gracias";
import InfoCliente from "./Pages/infoCliente";

const Stack = createNativeStackNavigator();

// Componente para pasar props consistentemente
const ScreenWrapper = ({ component: Component, cart, setCart, ...props }) => (
  <Component {...props} cart={cart} setCart={setCart} />
);

export default function App() {
  const [cart, setCart] = useState({});

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ 
          gestureEnabled: false,
          headerShown: false,
          animation: "fade" 
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Pagina_Bienvenida} />
        
        <Stack.Screen name="Menu_general">
          {(props) => <ScreenWrapper {...props} component={Menu_general} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        
        <Stack.Screen name="Carrito">
          {(props) => <ScreenWrapper {...props} component={Carrito} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        
        <Stack.Screen name="Bill">
          {(props) => <ScreenWrapper {...props} component={BillScreen} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        
        <Stack.Screen name="Gracias">
          {(props) => <ScreenWrapper {...props} component={Gracias} cart={cart} setCart={setCart} />}
        </Stack.Screen>
        
        <Stack.Screen name="InfoCliente">
          {(props) => <ScreenWrapper {...props} component={InfoCliente} cart={cart} setCart={setCart} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}