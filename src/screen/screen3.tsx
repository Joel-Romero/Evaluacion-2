import { StackScreenProps } from '@react-navigation/stack'; 
import React from 'react' 
import { Image,View, Text, Button, TouchableOpacity } from 'react-native'; 
import { styles } from '../../Theme/theme';


export const screen3 = ({navigation}:any) => { 
return ( 
    <View style={styles.globalMargin}>  
    <Text style={styles.title}>Imagen 2</Text>
        <View>
        <Image source={{uri:
        'https://modeladodesistemasyprincipiosdeprogramacion1blog.wordpress.com/wp-content/uploads/2017/09/descarga-3.jpg?w=640'}  
        }style={styles.imagen} 
        />
        </View>
    </View> 
) 
}
export default screen3;