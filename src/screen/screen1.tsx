import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../Theme/theme';

export const Screen1 = ({ navigation }: any) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Bienvenido</Text>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('screen2')}>
                    <Text style={styles.buttonText}>Imagen 1</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('screen3')}>
                    <Text style={styles.buttonText}>Imagen 2</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('screen4')}>
                    <Text style={styles.buttonText}>{'>='}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('screen5')}>
                <Text style={styles.buttonText}>{'<='}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Screen1;
