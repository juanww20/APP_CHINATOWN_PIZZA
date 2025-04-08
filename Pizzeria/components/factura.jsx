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
export function MetodoDePago({ onSelect}){
    const emojisWithIcons = [
        {title: 'Pago Movil'},
        {title: 'Efectivo'},
      ];
    return(
    <SelectDropdown
        data={emojisWithIcons}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
          if (onSelect) {
              onSelect(selectedItem.title); // Llama al callback con el método seleccionado
          }
      }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {/* Removed the direct rendering of selectedItem */}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || 'Método de pago'}
              </Text>
              <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => {
          return (
            <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#1A1A1A'})}}>
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    )
}

const styles = StyleSheet.create({
    dropdownButtonStyle: {
      width: 250,
      height: 50,
      backgroundColor: '#1f1f1f',
      borderRadius: 12,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 12,
      borderColor: '#FF3B3B',
      borderWidth: 2,
    },
    dropdownButtonTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#F5F5F5',
    },
    dropdownButtonArrowStyle: {
      fontSize: 28,
      color: '#F5F5F5',
    },
    dropdownMenuStyle: {
      backgroundColor: '#1f1f1f',
      borderRadius: 4,
    },
    dropdownItemStyle: {
      width: '100%',
      flexDirection: 'row',
      paddingHorizontal: 12,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 8,
    },
    dropdownItemTxtStyle: {
      flex: 1,
      fontSize: 18,
      fontWeight: '500',
      color: '#F5F5F5',
    },
  });