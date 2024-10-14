import {
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorsS } from "@/styles/Colors";
import { Link } from "expo-router";


interface SimpleEventCardProps {
  title: string;
  img: string;
  widthOfCard: number;
  heightOfCard?: number
}

const SimpleEventCard: React.FC<SimpleEventCardProps> = ({
  title,
  widthOfCard,
  heightOfCard
}) => {
  const width = widthOfCard;

  return (
    <>
      {/* LinearGradient is placed after the image but absolutely positioned to overlay */}

      <View style={[ { width: width, borderRadius: 20, height: heightOfCard }]}>
      <Link href="SingleEventScreen.tsx" asChild />
          <Image
            borderRadius={8}
            style={styles.imgStyling}
            source={{
              uri: "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
            }}
          />
          <View style={{ ...StyleSheet.absoluteFillObject, borderRadius: 20 }}>
            <LinearGradient
              colors={["transparent", ColorsS.BLACK]}
              style={{ flex: 1, borderRadius: 20 }}
            />
            <Text style={styles.imageCaption}>{title}</Text>
          </View>

      </View>
    </>
  );
};

export default SimpleEventCard;
const styles = StyleSheet.create({

  imgStyling: {
    width: "100%",
    height: "100%",
  },

  overLay: {
    top: "50%",
  },
  imageCaption: {
    position: "absolute",
    color: ColorsS.WHITE,
    fontSize: 19,
    bottom: 0,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 5,
  },
});
