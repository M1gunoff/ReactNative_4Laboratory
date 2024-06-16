import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer} from '@react-navigation/native';
import NormalStack from './screens/NormalStack';
import NormalStack2 from './screens/NormalStack2';

const Stack = createStackNavigator();

export const AppStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            title: "Tabs",
            headerStyle: {
              backgroundColor: "#ff7f40"
            },
            headerTintColor: "#fff",
            headerTitleStyle: { fontWeight: "bold"},}}
        >
          <Stack.Screen name="Home" component={NormalStack} />
          <Stack.Screen name="Note" component={NormalStack2} />
        </Stack.Navigator>
      );
}


export default function App() {
        return (
          <NavigationContainer>
            <AppStack />
          </NavigationContainer>
        );
      }
