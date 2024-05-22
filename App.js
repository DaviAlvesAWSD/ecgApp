import {React, useState} from "react";
import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";


import Home from "./src/pages/home";

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <Image
      style={{ width: 150, height: 50 }}
      source={require('./assets/ecgLogo2.png')}
      
    />
  );
}

export default function App() {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor:"#66bb6a",
            headerTitleAlign:"center",
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: '#66bb6a',

            }      
          }}

        />
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
