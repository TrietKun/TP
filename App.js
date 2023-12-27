import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackHome from './navigation/stacks/stackHome';
export default function App() {
  return (
    <NavigationContainer>
      <StackHome />
    </NavigationContainer>
  );
}