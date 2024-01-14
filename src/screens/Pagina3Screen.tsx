import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalContainer}>
      <Text style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi a ipsa
        recusandae quidem rem incidunt molestiae. Voluptates incidunt eveniet
        commodi, ipsa sequi doloribus dolores consequuntur culpa ipsum numquam
        nisi voluptatem?
      </Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir a la pagina 1" onPress={() => navigation.popToTop()} />
    </View>
  );
};
