import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, Modal} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CasualButton({ texto,  func }) {
    return(
        <Pressable onPress={func} style={[styles.boton]}>
            <Text style={{color:'white',fontSize:15,fontWeight:'bold'}}>{texto}</Text>
        </Pressable>
    );
}

export function Dropdown({data, placeholder}){
    return(
    <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              {/* Removed the direct rendering of selectedItem */}
              <Text style={styles.dropdownButtonTxtStyle}>
                {(selectedItem && selectedItem.title) || placeholder}
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
    boton:{
        width:'90%',
        height:60,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:8,
        backgroundColor:'#FF3B3B',
        marginBottom: 15,
    },
    dropdownButtonStyle: {
        width: '80%',
        height: 50,
        backgroundColor: '#1f1f1f',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 12,
        borderColor: '#FF3B3B',
        borderWidth: 2,
        marginVertical: 10,
      },
      dropdownButtonTxtStyle: {
        flex: 1,
        fontSize: 16,
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
})