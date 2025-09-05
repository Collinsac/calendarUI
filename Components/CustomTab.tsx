import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Colors from "@/hooks/Colors";

const CustomTab = ({ state, navigation }: BottomTabBarProps) => {
  return (
    <View className="relative">
      <View className="absolute bg-white left-0 right-0 mx-4 bottom-14 rounded-full flex-row">
        {state.routes.map(
          (
            route: { key: React.Key | null | undefined; name: string },
            index: any
          ) => {
            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key as string,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };

            // Map route names to icons
            let iconName;
            if (route.name === "Home") iconName = "home-outline";
            else if (route.name === "about") iconName = "pie-chart-outline";
            else if (route.name === "calendar") iconName = "calendar-outline";
            else if (route.name === "folder") iconName = "folder-open-outline";
            else if (route.name === "job") iconName = "briefcase-outline";

            return (
              <TouchableOpacity
                key={route.key}
                onPress={onPress}
                className="w-[18%] m-[1%] aspect-square rounded-full items-center justify-center"
                style={isFocused && { backgroundColor: Colors.Black }}
              >
                <Ionicons
                  name={iconName as any}
                  size={20}
                  color={isFocused ? "white" : Colors.Black}
                />
              </TouchableOpacity>
            );
          }
        )}
      </View>
    </View>
  );
};

export default CustomTab;
