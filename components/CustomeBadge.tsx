import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ColorsS } from "@/styles/Colors";

interface CustomeBadgeProps {
  title: string;
  emoji: string;
  active?: boolean;
}

const CustomeBadge: React.FC<CustomeBadgeProps> = ({ title, emoji, active }) => {

  return (
    <View style={[styles.container,{ backgroundColor: active ? ColorsS.Secondary : ColorsS.WHITE }]}>
      <View style={styles.emojiContainer}>
        <Text>{emoji}</Text>
      </View>

      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",

    padding: 8,
    borderRadius: 10,
    gap: 5,
    alignItems: "center",
    display: "flex",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 2,

  },
  emojiContainer: {
    backgroundColor: ColorsS.LIGHT_GRAY_Background,
    padding: 5,
    borderRadius: 5,
  },
  titleStyle: {
    fontWeight: "bold",
    color: ColorsS.Primary,
  },
});

export default CustomeBadge;
