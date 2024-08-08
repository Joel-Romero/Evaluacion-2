import { StackScreenProps } from '@react-navigation/stack'; 
import React from 'react' 
import { Image,View, Text, Button, TouchableOpacity } from 'react-native'; 
import { styles } from '../../Theme/theme';


export const screen2 = ({navigation}:any) => { 
return ( 
    <View style={styles.globalMargin}>  
    <Text style={styles.title}>Imagen 1</Text>
        <View>
        <Image source={{uri:
        'https://www.ucatalunya.edu.co/img/blog/los-mejores-lenguajes-de-programacion-en-el-desarrollo-web-y-su-importancia-en-la-era-digital.jpg'}  
        }style={styles.imagen} 
        />
        </View>
    </View> 
) 
}
export default screen2;