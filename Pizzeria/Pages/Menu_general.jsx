import { Text, View, ScrollView, StyleSheet, Image, FlatList, StatusBar} from 'react-native'
import React, { Component } from 'react'
import pizzas from '../assets/pizzas.png'
import bebidas from '../assets/bebidas.png'
import ensaladas from '../assets/ensaladas.png'
import postres from '../assets/postres.png'
import adicionales from '../assets/adicionales.png'
import {MenuSectionButton, MenuProduct} from '../components/menuComponents'
import datos from '../data/menuData.json'
import { CasualButton } from '../components/generals'


export default function Menu_general({navigation}) {
        const [selectedId, setSelectedId] = React.useState(0);

        const toogleSelection = (id) => {
            if(selectedId === id) return;
            else setSelectedId(id)
        }

        const [data, setData] = React.useState([]);

        React.useEffect(() => {
            setData(datos.pizzas); // Asigna los datos del JSON al estado
        }, []);

        return (
            <View style={styles.contenedor}>
                <StatusBar barStyle="light-content" backgroundColor="#1A1A1A" />

                <ScrollView horizontal={true}
                    showsHorizontalScrollIndicator={false} style={{width:'100%',marginTop: 20,maxHeight: '18%'}}>
                    <MenuSectionButton imagen={pizzas} texto={'Pizzas'} id={0} isSelected={selectedId===0} onSelect={toogleSelection}/>
                    <MenuSectionButton imagen={bebidas} texto={'Bebidas'} id={1} isSelected={selectedId===1} onSelect={toogleSelection}/>
                    <MenuSectionButton imagen={ensaladas} texto={'Ensaladas'} id={2} isSelected={selectedId===2} onSelect={toogleSelection}/>
                    <MenuSectionButton imagen={postres} texto={'Postres'} id={3} isSelected={selectedId===3} onSelect={toogleSelection}/>
                    <MenuSectionButton imagen={adicionales} texto={'Adicionales'} id={4} isSelected={selectedId===4} onSelect={toogleSelection}/>
                </ScrollView>

                <FlatList
                    data={data}
                    renderItem={({ item }) => <MenuProduct item={item} />}
                    keyExtractor={item => item.id}
                    style={{height: '70%'}}
                />

                <CasualButton texto="Ver Orden" styles={{height: '10%'}}></CasualButton>
            </View>
        )
    }


const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: '#1A1A1A',
        justifyContent: 'flex-start',
    },

})