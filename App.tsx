import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ReactTab from "./screens/ReactTab";
import React_NativeTab from "./screens/React_NativeTab";
import NodeTab from "./screens/NodeTab";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ReactTab"
        component={ReactTab}
        options={{
          tabBarLabel: "React",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/react.jpg")}
              style={{
                width: size,
                height: size,
                borderRadius: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="React_NativeTab"
        component={React_NativeTab}
        options={{
          tabBarLabel: "React Native",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/react_native.jpg")}
              style={{
                width: size,
                height: size,
                borderRadius: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="NodeTab"
        component={NodeTab}
        options={{
          tabBarLabel: "Node",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("./assets/icon.png")}
              style={{
                width: size,
                height: size,
                borderRadius: size,
                tintColor: color,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <MyTabs />
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
