import {createDrawerNavigator} from '@react-navigation/drawer';
import {StackNavigation} from './StackNavigation';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigation} />
      <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};
