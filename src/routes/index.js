import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from '../screens/Dashboard';
import Movies from '../screens/Movies';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="Movies" component={Movies} />
    </Drawer.Navigator>
  );
}