import { Image } from "react-native";
import React from "react";

type Props = {};

const ProfileComp = ({ size }: { size: number }) => {
  return (
    <Image
      source={{
        uri: "https://cdn.dribbble.com/users/15098011/avatars/normal/68e6afb62d4f23c399b61ae707959449.jpg?1734448766",
      }}
      className={`w-${size} h-${size} rounded-full`}
    />
  );
};

export default ProfileComp;
