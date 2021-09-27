import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StackRoutes from "./StackRoutes";
import Movies from "../screens/Movies";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#090A0E",
          paddingTop: 20,
        },
        drawerActiveBackgroundColor: "#E72F49",
        drawerActiveTintColor: "#FFFFFF",
        drawerInactiveTintColor: "#FFFFFF",
      }}
    >
      <Drawer.Screen
        name="StackRoutes"
        component={StackRoutes}
        options={{
          title: "Dashboard",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "movie-open" : "movie-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Movies"
        component={Movies}
        options={{
          title: "Movies",
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={focused ? "archive" : "archive-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
