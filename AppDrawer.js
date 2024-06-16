import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';


const Drawer = createDrawerNavigator();

export const AboutDrawer = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Dashboard" component={DashboardScreen} options={{
            title: "React Native Navigation",
            drawerLabel: "Drawer Navigation",
            drawerContentStyle: {
                backgroundColor: "#f5f5f5",
            },
            headerStyle: {
              backgroundColor: "#ff7f40"
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold"},
        }}/>
        <Drawer.Screen name="Features" component={SettingsScreen} options={{
            title: "Drawer Navigation",
            drawerLabel: "Features",
            drawerContentStyle: {
                backgroundColor: "#f5f5f5",
            },
            headerStyle: {
              backgroundColor: "#ff7f40"
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold"},
        }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AboutDrawer/>
    </NavigationContainer>
  )
}