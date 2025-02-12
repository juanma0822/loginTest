import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "./screens/Login";
import Home from "./screens/Home";

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerShown: false,
            headerStyle: { backgroundColor: "#2700fb" },
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: { backgroundColor: "#a6dfff" },
            headerBackTitle: "Exit",
            headerLeft: null,
          }}
        />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
