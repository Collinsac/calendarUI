import { Image, ScrollView, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/hooks/Colors";
import BorderedIcon from "./BorderedIcon";
import { EvilIcons } from "@expo/vector-icons";
import ProfileComp from "./ProfileComp";

type Props = {
  children?: React.ReactNode;
  display?: boolean;
};

const Background = (props: Props) => {
  return (
    <LinearGradient
      colors={["#ebe3e3", Colors.linBlue]}
      locations={[0.3, 0.5]}
      className="flex-1 pt-16 px-4"
    >
      {props.display && (
        <View className="flex-row items-center gap-4 mb-5">
          <ProfileComp size={12} />
          <Text className="text-2xl">
            Hello <Text className="font-semibold">Samantha</Text>
          </Text>

          <BorderedIcon Icons={EvilIcons} name="bell" size={24} Isnotify side />
        </View>
      )}

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 ">
        {props.children}
        <View className="py-20" />
      </ScrollView>
    </LinearGradient>
  );
};

export default Background;
