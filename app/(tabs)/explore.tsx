import { StyleSheet, Image, Platform, View, Text, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

import { LinearGradient } from "expo-linear-gradient";
import { ColorsS } from "@/styles/Colors";

export default function TabTwoScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.ImageConatiner}>
        <Image
          style={styles.imgStyling}
          source={{
            uri: "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
          }}
        />
        <View style={{ ...StyleSheet.absoluteFillObject, top: "60%" }}>
          <LinearGradient
            colors={["transparent", ColorsS.BLACK]}
            style={{ flex: 1 }}
          />
        </View>
        <View style={{ position: "absolute", bottom: 0 }}>
          <Text style={styles.ImageTitleCaption}>KLK</Text>
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
          <Text style={styles.DescriptionInfo}>Mañana Mism</Text>
        </View>
        <View style={styles.DataContainer}>
          <Ionicons name="time-outline" size={30} color={ColorsS.Secondary} />
          <Text style={styles.DescriptionInfo}>10:00am</Text>
        </View>
        <View style={styles.DataContainer}>
          <Ionicons
            name="location-outline"
            size={30}
            color={ColorsS.Secondary}
          />
          <Text style={styles.DescriptionInfo}>Recriational Event Center</Text>
        </View>
      </View>

    </View>
  );
}

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
  FavoriteButton:{
    backgroundColor:ColorsS.Secondary,
    width:50,
    height:50
  }
});
