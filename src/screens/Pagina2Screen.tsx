import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina2Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Una Página más',
    });
  }, []);

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in ut
        suscipit sunt at molestias nam, autem itaque iste praesentium dolor odio
        vitae minima corrupti cum deleniti impedit explicabo voluptate!
      </Text>
      <Button
        title="Ir a página 3"
        onPress={() => navigation.navigate('Página 3')}
      />
    </View>
  );
};
