import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { KeyboardAvoidingView } from "react-native";
import { ColorsS } from "@/styles/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: ColorsS.Secondary,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 3,
        },
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "home" : "home"} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmarkScreen"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bookmark" : "bookmark"}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="(CalendarTab)"
        options={{
          title: "",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "calendar" : "calendar"}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
}
