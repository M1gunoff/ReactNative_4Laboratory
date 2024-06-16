import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { Pressable, Text } from 'react-native';

const Stack = createNativeStackNavigator()

export const AboutStack = () => {
  return (<Stack.Navigator 
  initialRouteName="Home"
    screenOptions={{
      title: "Stack",
      headerStyle: {
        backgroundColor: "#ff7f40"
      },
      headerTintColor: "#fff",
      headerTitleStyle: { fontWeight: "bold"},
      headerRight: () => (
        <Pressable onPress={() => alert("Menu button pressed!")}>
          <Text style={{ color: "#fff", fontSize: 16}}>Menu</Text>
        </Pressable>
      ),
      contentStyle: {
        backgroundColor: "#fff",
      },
    }}>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="About" component={AboutScreen}/>
  </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AboutStack />
    </NavigationContainer>
  );
}

