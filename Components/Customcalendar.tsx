import { View, Text, TouchableOpacity, ImageBackground } from "react-native";
import React, { useState } from "react";
import dayjs from "dayjs";
import Colors from "@/hooks/Colors";

type Props = {};

const Customcalendar = (props: Props) => {
  const [date] = useState(dayjs());
  const Days = ["SUN", "MON", "TUE", "WED", "THR", "FRI", "SAT"];
  const days = date.daysInMonth();
  const startDay = date.startOf("month").day();
  const day = date.date();

  // meetings
  const meeting = [1, 5, 14, 18, 21, 27, 31];

  return (
    <View className="bg-white/50 items-center rounded-3xl my-3 p-3">
      <View className="flex-row mb-2">
        {Days.map((day, index) => (
          <Text className="w-[14.28%] text-center text-sm" key={index}>
            {day}
          </Text>
        ))}
      </View>

      <View className="flex-row items-center flex-wrap">
        {Array.from({ length: startDay }, (_, index) => (
          <View className="w-[14.28%]" key={index}></View>
        ))}

        {Array.from({ length: days }, (_, index) => (
          <TouchableOpacity
            key={index}
            className="w-[13.28%] m-[0.5%] aspect-square rounded-full items-center justify-center overflow-hidden bg-white border-2"
            style={{
              borderColor: day === index + 1 ? Colors.darkBlue : "white",
            }}
          >
            {meeting.includes(index + 1) ? (
              <ImageBackground
                className="w-full h-full"
                source={{
                  uri: "https://cdn.dribbble.com/users/15098011/avatars/normal/68e6afb62d4f23c399b61ae707959449.jpg?1734448766",
                }}
              >
                <View className="bg-black/70 w-full h-full items-center justify-center">
                  <Text className="text-center text-sm text-white ">
                    {index + 1}
                  </Text>
                </View>
              </ImageBackground>
            ) : (
              <Text className="text-center text-sm">{index + 1}</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Customcalendar;
