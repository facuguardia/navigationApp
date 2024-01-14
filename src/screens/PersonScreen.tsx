import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {StackScreenProps} from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'Persona'> {}

export const PersonScreen = ({route, navigation}: Props) => {

  const params = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.text}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
