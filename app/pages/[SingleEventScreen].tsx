import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { LinearGradient } from "expo-linear-gradient";
import { ColorsS } from "@/styles/Colors";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";


const SingleEventScreen: React.FC<any> = () => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const { title, timeStart, timeEnd, location, Date, imguri} = useLocalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.ImageConatiner}>
        <Image
          style={styles.imgStyling}
          source={
            imguri && typeof imguri === 'string'
              ? { uri: imguri }
              : {uri: 'https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg'} // Optional placeholder if the image is invalid
          }
        />
        <View style={{ ...StyleSheet.absoluteFillObject, top: "60%" }}>
          <LinearGradient
            colors={["transparent", ColorsS.BLACK]}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ position: "absolute", bottom: 0 }}>
          <Text style={styles.ImageTitleCaption}>{title}</Text>
          <Text style={styles.ImageFriendsCaption}>
            +20 Friends of yours have like this event
          </Text>
        </View>
      </View>

      <View style={styles.DescriptionContainer}>
        <View style={styles.DataContainer}>
          <Ionicons
            name="calendar-outline"
            size={30}
            color={ColorsS.Secondary}
          />
          <Text style={styles.DescriptionInfo}>{Date}</Text>
        </View>
        <View style={styles.DataContainer}>
          <Ionicons name="time-outline" size={30} color={ColorsS.Secondary} />
          <Text style={styles.DescriptionInfo}>{timeStart} - {timeEnd}</Text>
        </View>
        <View style={styles.DataContainer}>
          <Ionicons
            name="location-outline"
            size={30}
            color={ColorsS.Secondary}
          />
          <Text style={styles.DescriptionInfo}>{location}</Text>
        </View>

        <TouchableOpacity style={styles.FavoriteButton}>
          <Text style={styles.FavoriteText}>Add to favorite</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingleEventScreen;

const styles = StyleSheet.create({
  ImageConatiner: {
    width: "100%",
    height: "70%",
    backgroundColor: "red",
  },
  DescriptionContainer: {
    width: "100%",
    height: "30%",
    padding: 20,
  },
  imgStyling: {
    width: "100%",
    height: "100%",
  },
  ImageTitleCaption: {
    color: ColorsS.WHITE,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginBottom: 5,
  },
  ImageFriendsCaption: {
    color: ColorsS.WHITE,
    fontSize: 15,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  DataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
  },
  DescriptionInfo: {
    color: ColorsS.Primary,
    fontSize: 15,
  },
  FavoriteButton: {
    backgroundColor: ColorsS.Secondary,
    padding: 15,
    alignSelf: "center",
    borderRadius: 99,
    marginTop: 15,
  },
  FavoriteText: {
    fontSize: 20,
    color: ColorsS.WHITE,
    fontWeight: "900",
  },
});
