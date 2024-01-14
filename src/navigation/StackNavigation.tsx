import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Pagina1Screen} from '../screens/Pagina1Screen';
import {Pagina2Screen} from '../screens/Pagina2Screen';
import {Pagina3Screen} from '../screens/Pagina3Screen';
import {PersonScreen} from '../screens/PersonScreen';

export type RootStackParams = {
  Página1: undefined;
  Página2: undefined;
  Página3: undefined;
  Persona: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Página 1" component={Pagina1Screen} />
      <Stack.Screen name="Página 2" component={Pagina2Screen} />
      <Stack.Screen name="Página 3" component={Pagina3Screen} />
      <Stack.Screen name="Persona" component={PersonScreen} />
    </Stack.Navigator>
  );
};
