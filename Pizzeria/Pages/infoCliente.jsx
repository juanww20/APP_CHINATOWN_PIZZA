import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { CasualButton, Dropdown } from '../components/generals';
import { InputForm } from '../components/infoCliente';
import Zonas from '../data/Zonas.json';
import useFormValidation from '../functions/FormValidation';
import { validateOrderForm } from '../functions/formValidationRules';


export default function InfoCliente({ navigation, cart, setCart }) {
    const {
        formData,
        isFormValid,
        handleInputChange,
        handleDropdownChange,
        touched,
        setTouched,
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

    const handleTipoOrdenChange = (item) => {
        handleInputChange('tipoOrden', item.title);
    };

    const handleZonaChange = (item) => {
        handleInputChange('zona', item);
    };

    const handleSubmit = () => {
        if (isFormValid) {
            console.log('Datos válidos:', formData);
            // Aquí iría la lógica para procesar la orden
            // navigation.navigate('SiguientePantalla');
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
                data={[{ "title": "Delivery" }, { "title": "Pick-Up" }]}
                placeholder={'Tipo de Orden'}
                onSelect={(value) => handleDropdownChange('tipoOrden', value)}
                value={formData.tipoOrden}
            />

                <Text style={{ fontSize: 16, color: '#F5F5F5', textAlign: 'left', fontWeight: '400', marginTop: 10, width: '90%' }}>
                    Información de Cliente
                </Text>
                <InputForm
                    placeholder={'Nombre'}
                    teclado={'default'}
                    onChangeText={(text) => handleInputChange('nombre', text)}
                >
                    value={formData.nombre}
                </InputForm>
                <InputForm
                    placeholder={'Telefono (04XX-XXXXXXX)'}
                    teclado={'numeric'}
                    onChangeText={(text) => handleInputChange('telefono', text)}
                >
                    value={formData.telefono}
                </InputForm>

                <Text style={{ fontSize: 16, color: '#F5F5F5', textAlign: 'left', fontWeight: '400', marginTop: 10, width: '90%' }}>
                    Información de Entrega
                </Text>
                <InputForm placeholder={'Calle/Av/Urb'} teclado={'default'} />
                <InputForm placeholder={'Referencias (¿Cómo llegar?)'} teclado={'default'} />
                <Dropdown 
                data={Zonas}
                placeholder={'Zona de Entrega'}
                onSelect={(value) => handleDropdownChange('zona', value)}
                value={formData.zona}
                />
            </View>
            <CasualButton texto={'Facturar'} func={handleSubmit} disabled={!isFormValid} estilo={{ opacity: isFormValid ? 1 : 0.5 }}/>
        </View>
    );
}
