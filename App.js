import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './res/screens/Home';
import Info from './res/screens/Info';
import Manage from './res/screens/Manage';
import Add from './res/screens/Add';
import Modify from './res/screens/Modify';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Info" component={Info}/>
        <Stack.Screen name="Manage" component={Manage}/>
        <Stack.Screen name="Add" component={Add}/>
        <Stack.Screen name="Modify" component={Modify}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
