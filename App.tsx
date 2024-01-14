import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}> Stack Navigation </Text>
        <Text style={styles.text}> Drawer Navigation </Text>
        <Text style={styles.text}> BottomTab Navigation </Text>
        <Text style={styles.text}> MaterialTop Navigation </Text>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
