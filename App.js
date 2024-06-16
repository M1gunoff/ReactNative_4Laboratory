import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ProfileScreen from "./screens/ProfileScreen";
import Ionicons from "@expo/vector-icons/Ionicons"
import { AboutStack} from "./AppNativeStack";
import { AboutDrawer} from "./AppDrawer";
import { AppStack } from "./AppStack";
const Tab = createBottomTabNavigator();

export default function App() {
    return ( 
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarActiveTintColor: "#ff7f40",
                tabBarInactiveTintColor: "#0d1427",
                headerStyle: {
                    backgroundColor: "#ff7f40"
                  },
                  headerTintColor: "#fff",
                  headerTitleStyle: { fontWeight: "bold"},
            }}>
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "My Profile",
                    tabBarIcon: ({ color }) =>  <Ionicons name="person" size={20} color={color}/>,
                    tabBarBadge: 3,
                }}/>
                <Tab.Screen name="Drawer" component={AboutDrawer} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="chevron-up-circle-outline" size={20} color={color}/>
                }}/>
                <Tab.Screen name="Stack" component={AboutStack} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="chevron-up-circle-outline" size={20} color={color}/>
                }}/>
                <Tab.Screen name="Tabs" component={AppStack} options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => <Ionicons name="chevron-up-circle-outline" size={20} color={color}/>
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}