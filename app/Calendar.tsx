import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Background from "@/Components/Background";
import BorderedIcon from "@/Components/BorderedIcon";
import { AntDesign, Entypo, Feather, Ionicons } from "@expo/vector-icons";
import Colors from "@/hooks/Colors";
import dayjs from "dayjs";
import Customcalendar from "@/Components/Customcalendar";
import GoogleMeet from "../assets/images/google.png";

const Calendar = () => {
  type MeetingCardDataProps = {
    id: number;
    time: string;
    title: string;
    profile: number[];
    onGoing?: boolean;
  };
  //
  const MeetingCard = (props: MeetingCardDataProps) => {
    //
    const Profile = ({ Style }: { Style: {} }) => {
      return (
        <Image
          source={{
            uri: "https://cdn.dribbble.com/users/15098011/avatars/normal/68e6afb62d4f23c399b61ae707959449.jpg?1734448766",
          }}
          className="w-12 h-12 rounded-full border border-white absolute"
          style={Style}
        ></Image>
      );
    };

    return (
      <View className="flex-row gap-5">
        <Text>{props.time}</Text>

        <View className="bg-white/30 flex-1 p-3 rounded-3xl">
          <View className="flex-row justify-between items-center">
            <Text>{props.title}</Text>
            <View className="w-12 h-12 p-3 border border-gray-400 rounded-full">
              <Image
                source={GoogleMeet}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>
          </View>
          {/* icons profile */}
          <View className="relative h-12 mt-4">
            {props.profile.map((_: any, index: number) => (
              <Profile key={index} Style={{ left: `${index * 30}` }} />
            ))}
          </View>

          {props.onGoing && (
            <TouchableOpacity className="py-4 rounded-full mt-4" style={{ backgroundColor: Colors.Black }}>
              <Text className="text-white text-center">Join meeting</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  const MeetingCardData: MeetingCardDataProps[] = [
    {
      id: 1,
      time: "8:30 AM",
      title: "Client Kickoff Call",
      profile: [1, 2],
    },
    {
      id: 2,
      time: "5:00 PM",
      title: "Networking Event",
      profile: [1, 2, 3],
      onGoing: true,
    },
  ];

  const [date] = useState(dayjs());
  return (
    <Background>
      <View className="flex-row items-center">
        <BorderedIcon Icons={Entypo} name="chevron-small-left" size={20} />
        <BorderedIcon
          Icons={Ionicons}
          name="calendar-outline"
          size={15}
          side
          Isnotify
          className="mr-2"
        />
        <BorderedIcon Icons={AntDesign} name="plus" size={15} />
      </View>

      <Text className="text-2xl my-4">Meeting Schedule</Text>

      <View className="flex-row items-center">
        <View className="p-0.5 bg-white rounded-full flex-row items-center gap-4">
          <BorderedIcon
            Icons={Ionicons}
            name="calendar-outline"
            size={15}
            className="border-gray-200 bg-gray-200"
            side
          />

          <Text>{date.format("DD,MM,YYYY")}</Text>

          <BorderedIcon Icons={Entypo} name="chevron-small-down" size={20} />
        </View>

        <BorderedIcon
          Icons={Feather}
          name="edit-3"
          size={15}
          Style={{ backgroundColor: Colors.Black, borderColor: Colors.Black }}
          Color="white"
          side
        />
      </View>

      <Customcalendar />

      <View className="gap-1">
        {MeetingCardData.map((data) => (
          <MeetingCard key={data.id} {...data} />
        ))}
      </View>
    </Background>
  );
};

export default Calendar;
