import React, {useEffect} from 'react';
import { View, Text, StatusBar } from 'react-native';
import { CasualButton, Dropdown } from '../components/generals';
import { InputForm } from '../components/infoCliente';
import Zonas from '../data/Zonas.json';
import useFormValidation from '../functions/FormValidation';
import { validateOrderForm } from '../functions/formValidationRules';
import { useNavigation, useRoute} from '@react-navigation/native';

export default function InfoCliente({ navigation, cart }) {
    const route = useRoute();
    
    const {
        formData,
        errors,
        isFormValid,
        handleInputChange,
        handleDropdownChange,
        setFormData,
    } = useFormValidation(
        {
            nombre: '',
            telefono: '',
            tipoOrden: '',
            direccion: '',
            referencia: '',
            zona: '',
        },
        validateOrderForm
    );

    // Función modificada para manejar el cambio de tipo de orden
    const handleTipoOrdenChange = (item) => {
        const tipo = item?.title || '';
        setFormData(prev => ({
            ...prev,
            tipoOrden: tipo,
            // Limpiamos los campos si no es Delivery
            ...(tipo !== 'Delivery' && {
                direccion: '',
                referencia: '',
                zona: ''
            })
        }));
    };

    const handleSubmit = () => {
        if (isFormValid) {
            navigation.navigate('Bill', { 
                cart,
                clientInfo: { // Agrega esta nueva prop
                    orden: formData.tipoOrden,
                    nombre: formData.nombre,
                    telefono: formData.telefono,
                    ubicacion: formData.tipoOrden === 'Delivery' 
                        ? `${formData.direccion}, ${formData.zona} (${formData.referencia})`
                        : 'Recoger en local'
                }
            });
        } else {
            alert('Error: Faltan campos por completar o son inválidos.');
        }
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#1A1A1A', alignItems: 'center', justifyContent: 'space-between' }}>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />
            <Text style={{ fontSize: 20, color: '#F5F5F5', textAlign: 'center', fontWeight: 'bold', marginTop: 10 }}>
                Información de Orden
            </Text>

            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                <Dropdown 
                    data={[{ title: 'Delivery' }, { title: 'Pickup' }]}
                    placeholder={'Tipo de Orden'}
                    onSelect={handleTipoOrdenChange}
                    value={formData.tipoOrden ? { title: formData.tipoOrden } : null}
                    error={errors.tipoOrden}
                />

                <Text style={{ fontSize: 16, color: '#F5F5F5', textAlign: 'left', fontWeight: '400', marginTop: 10, width: '90%' }}>
                    Información de Cliente
                </Text>
                <InputForm
                    placeholder={'Nombre'}
                    teclado={'default'}
                    onChangeText={(text) => handleInputChange('nombre', text)}
                    value={formData.nombre}
                />
                <InputForm
                    placeholder={'Telefono (04XX-XXXXXXX)'}
                    teclado={'numeric'}
                    onChangeText={(text) => handleInputChange('telefono', text)}
                    value={formData.telefono}
                />

                {/* Renderizado condicional mejorado */}
                {formData.tipoOrden === 'Delivery' ? (
                    <View style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: '#F5F5F5', textAlign: 'left', fontWeight: '400', marginTop: 10, width: '90%' }}>
                            Información de Entrega
                        </Text>
                        <InputForm
                            placeholder={'Calle/Av/Urb'}
                            teclado={'default'}
                            onChangeText={(text) => handleInputChange('direccion', text)}
                            value={formData.direccion}
                        />
                        <InputForm
                            placeholder={'Referencias (¿Cómo llegar?)'}
                            teclado={'default'}
                            onChangeText={(text) => handleInputChange('referencia', text)}
                            value={formData.referencia}
                        />
                        <Dropdown 
                            data={Zonas}
                            placeholder={'Zona de Entrega'}
                            onSelect={(item) => handleDropdownChange('zona', item.title)}
                            value={formData.zona}
                            error={errors.zona}
                        />
                    </View>
                ) : null}
            </View>
            <CasualButton 
                texto={'Facturar'} 
                func={handleSubmit} 
                disabled={!isFormValid} 
                estilo={{ opacity: isFormValid ? 1 : 0.5 }}
            />
        </View>
    );
}