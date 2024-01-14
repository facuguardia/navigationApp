import React from 'react';
import {Button, Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalContainer}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        doloremque culpa voluptas laudantium. Error ipsam excepturi nihil qui
        sequi enim, iure porro necessitatibus ab sint doloremque nulla nam sed
        voluptatem.
      </Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Página 2')}
      />
    </View>
  );
};
