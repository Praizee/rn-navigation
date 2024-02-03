import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SettingsScreen from "./screens/SettingsScreen";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/Profile";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelPosition: "below-icon",
          // tabBarShowLabel: false, //show or hide label
          tabBarActiveTintColor: "purple",
          tabBarInactiveTintColor: "#000",
        }}
      >
        <Tab.Screen
          name="Course List"
          component={CourseListScreen}
          options={{
            tabBarLabel: "Course List",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"school"} size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My Profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"person"} size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarLabel: "Settings",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"settings"} size={20} color={color} />
            ),
            tabBarBadge: 2, //for notifications
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
