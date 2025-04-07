import React from 'react';
import { View, Text, Pressable,StyleSheet, Image, StatusBar } from 'react-native';
import { CasualButton, Dropdown } from '../components/generals';
import { InputForm } from '../components/infoCliente';
import Zonas from '../data/Zonas.json';

export default function InfoCliente({navigation, cart, setCart}) {
    return(
        <View style={{ flex: 1,backgroundColor:'#1A1A1A', alignItems:'center', justifyContent:'space-between'}}>
            <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />

            <Text style={{fontSize:20,color:'#F5F5F5', textAlign:"center", fontWeight:"bold", marginTop:10}}>Información de Orden</Text>

            <View style={{alignItems:'center', justifyContent:'center', width:'100%'}}>
                <Dropdown data={[{"title": "Delivery"},{"title": "Pick-Up"}]} placeholder={'Tipo de Orden'}></Dropdown>

                <Text style={{fontSize:16,color:'#F5F5F5', textAlign:"left", fontWeight:"400", marginTop:10, width:'90%'}}>Información de Cliente</Text>
                <InputForm placeholder={'Nombre'}></InputForm>
                <InputForm placeholder={'Telefono'}></InputForm>

                <Text style={{fontSize:16,color:'#F5F5F5', textAlign:"left", fontWeight:"400", marginTop:10, width:'90%'}}>Información de Entrega</Text>
                <InputForm placeholder={'Calle/Av/Urb'}></InputForm>
                <InputForm placeholder={'Referencias (¿Cómo llegar?)'}></InputForm>
                <Dropdown data={Zonas} placeholder={'Zona de Entrega'}></Dropdown>
            </View>

            <CasualButton texto={'Facturar'} func={() => {}}></CasualButton>
        </View>
    )
}