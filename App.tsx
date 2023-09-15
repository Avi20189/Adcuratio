import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import ReactTab from "./component/ReactTab";
import React_NativeTab from "./component/React_NativeTab";
import NodeTab from "./component/NodeTab";

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

// After the app opens, the app should show a splash screen for 2 seconds.
// After the splash screen goes away, show a screen with 3 tabs at the bottom of the screen: (React, ReactNative, and Node).
// In each tab, show the hottest questions for that topic. Scrolling down the page should load more questions.
// Clicking a specific question opens its question page in the phone browser.

// Use the official public Stack Exchange API for getting the data. https://api.stackexchange.com/docs

// You should...

// Focus on code quality, project structure, application performance, and usability. You can use any UI library available for React Native.
//Try to keep bells and whistles to a minimum.

// You may choose any other libraries. You are free to take any technical decision provided that you can justify it to us after submission.

//We have to create home folder in component which it will contain all folders realted to home.
//
