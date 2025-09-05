import React from "react";
import { Tabs } from "expo-router";
import CustomTab from "@/Components/CustomTab";
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
type Props = {};

const _layout = (props: Props) => {
  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => <CustomTab {...props} />}
   >
    <Tabs.Screen name="Home" />
    <Tabs.Screen name="about" />
    <Tabs.Screen name="calendar" />
    <Tabs.Screen name="folder"/>
   </Tabs>

  );
};

export default _layout;
