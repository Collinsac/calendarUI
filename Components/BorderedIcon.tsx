import { View, TouchableOpacity } from "react-native";
import React, { JSX } from "react";
import Colors from "@/hooks/Colors";

type Props = {
  Icons: JSX.ElementType;
  name: string;
  size: number;
  Isnotify?: boolean;
  side?: boolean;
  className?: string;
  Style?: {};
  Color?: string;
};

const BorderedIcon = ({ Icons, Style, ...props }: Props) => {
  return (
    <TouchableOpacity
      className={`${props.Isnotify && "relative"} rounded-full ${
        props.side && "ml-auto"
      } border border-gray-400 w-12 h-12 items-center justify-center ${
        props.className
      }`}
      style={Style}
    >
      <Icons
        name={props.name}
        color={props.Color ? props.Color : Colors.Black}
        size={props.size}
      />
      {props.Isnotify && (
        <View className="absolute border border-white right-3 top-3 w-2 h-2 rounded-full bg-red-600" />
      )}
    </TouchableOpacity>
  );
};

export default BorderedIcon;
