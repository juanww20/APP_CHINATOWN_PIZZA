import React from "react";
import { TextInput, StyleSheet} from "react-native";

export function InputForm({placeholder, teclado, onChangeText, value}) {
    return (
        <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#bbb'
        keyboardType= {teclado}
        maxLength={teclado === 'numeric' ? 11 : 100}
        onChangeText={onChangeText}
        autoCapitalize={placeholder === 'Nombre' ? 'words' : 'none'}
        value={value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: '#FF3B3B',
        borderWidth: 2,
        paddingHorizontal: 10,
        marginVertical: 10,
        width: '80%',
        backgroundColor: '#1f1f1f',
        borderRadius:12,
        color: '#F5F5F5',
        fontSize: 16,
        fontWeight: '500',
    },
})