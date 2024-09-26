import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ColorsS } from "@/styles/Colors";

interface InterestCardProps {
  title: string;
  emoji: string;
}

const InterestCard: React.FC<InterestCardProps> = ({ title, emoji }) => {
  return (
    <View style={styles.container}>
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
    marginVertical: 10,
    padding: 8,
    borderRadius: 10,
    gap: 5,
    backgroundColor: ColorsS.WHITE,
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

export default InterestCard;
