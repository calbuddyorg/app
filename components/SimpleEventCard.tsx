import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ColorsS } from "@/styles/Colors";
import { Link } from "expo-router";
import { IEventInformation } from "@/interfaces";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

interface SimpleEventCardProps {
  event: IEventInformation;
  widthOfCard: number;
  heightOfCard?: number;
  modal?: boolean;
  onCardPress?: () => void;
}

const SimpleEventCard: React.FC<SimpleEventCardProps> = ({
  event,
  widthOfCard,
  heightOfCard,
  modal = false,
  onCardPress,
}) => {
  const width = widthOfCard;
  const id = 1;

  const CardContent = (
    <>
      <View style={[{ width: width, borderRadius: 20, height: heightOfCard }]}>
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
          <Text style={styles.imageCaption}>{event.title}</Text>
        </View>
      </View>
    </>
  );

  return modal ? (
    <TouchableWithoutFeedback onPress={onCardPress}>{CardContent}</TouchableWithoutFeedback>
  ) : (
    <Link
      href={{
        pathname: "pages/" + { id },
        params: {
          title: event.title,
          timeStart: event.timeStart,
          timeEnd: event.timeEnd,
          location: event.location,
          Date: event.Date,
        },
      }}
    >

        {CardContent}

      
    </Link>
  );
};

export default SimpleEventCard;

const styles = StyleSheet.create({
  imgStyling: {
    width: "100%",
    height: "100%",
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
