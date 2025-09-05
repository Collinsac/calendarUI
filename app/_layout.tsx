import React from "react";
import { Stack } from "expo-router";
import "../global.css";
type Props = {};

const _layout = (props: Props) => {
  return <Stack screenOptions={{ headerShown: false }} />;
};

export default _layout;
