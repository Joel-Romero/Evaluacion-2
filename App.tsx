
import React from 'react'; 
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import screen2 from './src/screen/screen2';
import screen3 from './src/screen/screen3';
import screen1 from './src/screen/screen1';
import screen4 from './src/screen/screen4';
import screen5 from './src/screen/screen5';



const Stack = createStackNavigator(); 
const App = () => { 
  return ( 
    <NavigationContainer> 
      <Stack.Navigator> 
        <Stack.Screen name="screen1" component={screen1} options={{ title: 'screen1' }} /> 
        <Stack.Screen name="screen2" component={screen2} options={{ title: 'screen2' }} />
        <Stack.Screen name="screen3" component={screen3} options={{ title: 'screen3' }} />
        <Stack.Screen name="screen4" component={screen4} options={{ title: 'screen4' }} />
        <Stack.Screen name="screen5" component={screen5} options={{ title: 'screen5' }} />
      </Stack.Navigator> 
    </NavigationContainer> 
  ); 
}; 
 
export default App;