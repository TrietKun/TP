import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Intro from '../../screens/Intro';
import Login from '../../screens/Login';
import Home from '../../screens/Home';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown : false}}>
      {/* <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default MyStack;