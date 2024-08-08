import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../Theme/theme';

export const Screen4 = ({ navigation }: any) => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState<string | null>(null);

    const handleCompare = () => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        if (!(num1) && !(num2)) {
            if (num1 >= num2) {
                setResult(`Número mayor o igual: ${num1}`);
            } else {
                setResult(`Número mayor o igual: ${num2}`);
            }
        } else {
            setResult('Ingrese números válidos.');
        }
    };

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Formulario</Text>
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='Número 1'
                value={number1}
                onChangeText={setNumber1}
            />
            <TextInput
                style={styles.input}
                keyboardType='numeric'
                placeholder='Número 2'
                value={number2}
                onChangeText={setNumber2}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleCompare}
            >
                <Text style={styles.buttonText}> {'>='} </Text>
            </TouchableOpacity>
            {result && <Text style={styles.result}>{result}</Text>}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Screen5')}
            >
                <Text style={styles.buttonText}> {'<='} </Text>
                
            </TouchableOpacity>
        </View>
    );
};
export default Screen4;
