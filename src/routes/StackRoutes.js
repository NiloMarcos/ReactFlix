import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import Details from '../screens/Details';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();

export default function StackRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard" 
        component={Dashboard} 
        options={{
          headerShown: false,
          
        }}
        /> 
      <Stack.Screen 
        name="Details" 
        component={Details} 
        options={{
          headerShown: false,
          title: 'Detalhes'
          
        }}
        />
      <Stack.Screen 
        name="Search" 
        component={Search} 
        options={{
          title: 'Sua busca',
          headerTintColor: "#FFF",
          headerTitleStyle: {
            color: "#FFF",
          },
          headerStyle: {
            backgroundColor: '#141929'
          }
          
        }}
        />
    </Stack.Navigator>
  );
}