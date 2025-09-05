import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { JSX, useState } from "react";
import Background from "@/Components/Background";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import dayjs from "dayjs";
import { LinearGradient } from "expo-linear-gradient";
import backImage from "../../assets/images/back.png";
import GoogleMeet from "../../assets/images/google.png";

import BorderedIcon from "@/Components/BorderedIcon";
import Colors from "@/hooks/Colors";
import ProfileComp from "@/Components/ProfileComp";
type setupProps = {
  id: number;
  Icons: JSX.ElementType;
  iconName: string;
  title?: string;
  description: string;
  complete: boolean;
};
const Home = () => {
  const [date] = useState(dayjs());

  const setupData: setupProps[] = [
    {
      id: 1,
      Icons: Ionicons,
      iconName: "checkmark",
      title: "Job Title",
      description: "Product Designer",
      complete: true,
    },
    {
      id: 2,
      Icons: Ionicons,
      iconName: "pencil-outline",
      description: "Skills",
      complete: false,
    },
    {
      id: 3,
      Icons: Ionicons,
      iconName: "briefcase-outline",
      description: "Experience",
      complete: false,
    },
    {
      id: 4,
      Icons: Ionicons,
      iconName: "time-outline",
      description: "Preferences",
      complete: false,
    },
  ];
  const SetupComp = ({ Icons, ...props }: setupProps) => {
    return (
      <View className="flex-row items-center gap-2">
        <View
          className="w-10 h-10 rounded-full items-center justify-center"
          style={{
            backgroundColor: props.complete ? Colors.Black : Colors.Blue,
          }}
        >
          {props.complete ? (
            <Ionicons name="checkmark" size={15} color="white" />
          ) : (
            <Icons
              name={props.iconName}
              size={15}
              color={props.complete ? "white" : Colors.Black}
            />
          )}
        </View>
        <View>
          {props.title && <Text>{props.title}</Text>}
          <Text className="font-semibold">{props.description}</Text>
        </View>
      </View>
    );
  };
  const Profile = ({ Style }: { Style: {} }) => {
    return (
      <Image
        source={{
          uri: "https://cdn.dribbble.com/users/15098011/avatars/normal/68e6afb62d4f23c399b61ae707959449.jpg?1734448766",
        }}
        className="w-10 h-10 rounded-full border border-white absolute"
        style={Style}
      ></Image>
    );
  };
  return (
    <Background display>
      {/*  */}
      {/*  */}
      <Text className="text-lg mt-4">{date.format("DD MMMM YYYY")}</Text>

      <Text className="text-4xl mt-2 font-light">
        Here's your <Text className="font-normal">work</Text> plan
      </Text>
      <Text className="text-4xl mt-2 font-normal">for today</Text>
      {/*  */}
      {/*  */}

      <View className="flex-row gap-2 mt-6">
        <TouchableOpacity className="border flex-1 py-4 items-center justify-center rounded-full">
          <Text>Add New Task</Text>
        </TouchableOpacity>
        {/*  */}
        {/*  */}
        <TouchableOpacity
          className="border flex-1 py-4 items-center justify-center rounded-full"
          style={{ backgroundColor: Colors.Black }}
        >
          <Text className="text-white">View My Projects</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
      {/*  */}
      <View className="mt-5 overflow-hidden rounded-3xl">
        <LinearGradient
          colors={["white", Colors.darkBlue]}
          start={{ x: 0.2, y: 0.8 }}
          className="p-4 relative z-0"
        >
          {/* Conteent */}
          <View className="z-10">
            <BorderedIcon
              Icons={MaterialCommunityIcons}
              name="arrow-top-right"
              size={20}
              side
            />

            <Text className="text-3xl">Finsh Profile Setup</Text>
            {/* steps */}

            <View className="my-4 gap-4">
              <View className="absolute top-3 bottom-3 left-[16px] w-0.5 bg-[#d4e7ee]" />
              {setupData.map((steps) => (
                <SetupComp key={steps.id} {...steps} />
              ))}
            </View>

            {/* Progress */}

            <View className="bg-[#d4e7ee] rounded-full overflow-hidden">
              <View
                className="flex-row p-1 items-center gap-2 w-[40%] rounded-full"
                style={{ backgroundColor: Colors.Black }}
              >
                <ProfileComp size={12} />
                <Text className="text-white text-lg">40%</Text>
              </View>
            </View>
          </View>

          <Image
            source={backImage}
            className="absolute top-[40%] left-[40%] w-full h-full"
            resizeMode="center"
          />
        </LinearGradient>
      </View>
      {/*  */}

      <View className="mt-40 flex-row items-center justify-between mb-5">
        <Text className="text-3xl">Upcoming (4)</Text>

        <TouchableOpacity className="border border-gray-400 px-6 py-2 rounded-full">
          <Text className="text-lg">All</Text>
        </TouchableOpacity>
      </View>
      {/*  */}
      <View className="gap-2">
        {[1, 2, 3].map((item) => (
          <View key={item}  className="bg-white/50 p-4 flex-row items-center gap-2 rounded-3xl">
            <View className="w-12 h-12 p-3 border border-gray-400 rounded-full">
              <Image
                source={GoogleMeet}
                className="w-full h-full"
                resizeMode="contain"
              />
            </View>

            <View>
              <Text className="text-lg">Google Meet</Text>
              {/* icons profile */}
              <View className="relative h-12 mt-1">
                {[1, 2].map((_: any, index: number) => (
                  <Profile key={index} Style={{ left: `${index * 20}` }} />
                ))}
              </View>
            </View>

            <View
              className="ml-auto px-3 py-2 rounded-full"
              style={{ backgroundColor: Colors.Black }}
            >
              <Text className="text-white">8:30 PM</Text>
            </View>
          </View>
        ))}
      </View>
      {/*  */}

      <View className="my-5 flex-row items-center justify-between">
        <Text className="text-3xl">Project Proposals</Text>

        <TouchableOpacity className="border border-gray-400 px-6 py-2 rounded-full">
          <Text className="text-lg">All</Text>
        </TouchableOpacity>
      </View>

      {/*  */}
      <View className="gap-2">
        {[1, 2, 3].map((item) => (
          <View
            key={item}
            className="bg-white/50 p-5 flex-row items-center gap-3 rounded-3xl"
          >
            <BorderedIcon Icons={Ionicons} name="briefcase-outline" size={15} />

            <View>
              <Text className="text-xl font-semibold">12</Text>
              {/* icons profile */}
              <Text>Spark Media</Text>
            </View>

            <BorderedIcon
              Icons={MaterialCommunityIcons}
              name="arrow-top-right"
              size={15}
              side
            />
          </View>
        ))}
      </View>
    </Background>
  );
};

export default Home;
