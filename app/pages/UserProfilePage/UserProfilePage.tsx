import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Dimensions,
  ScrollView,
} from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { ColorsS } from "@/styles/Colors";
import { SafeAreaView } from "react-native-safe-area-context";
import InterestCard from "./components/interestsCard";
import SimpleEventCard from "../../../components/SimpleEventCard";
import VideoPreviewCard from "@/components/VideoPreviewCard";

export default function UserProfilePage() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);
  const { height, width } = Dimensions.get("window");

  const interest = [
    { title: "soccer", emoji: "⚽️" },
    { title: "soccer", emoji: "⚽️" },
    { title: "soccer", emoji: "⚽️" },
    { title: "soccersoccersoccer", emoji: "⚽️" },
  ];
  const attendedEvents = [
    {
      timeStart: "10:00am",
      timeEnd: "12:00pm",
      location: "REC",
      Date: "Mañana Mmg",
      title: "Football vs. Minot State",
      imguri:
        "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
    },
    {
      timeStart: "10:00am",
      timeEnd: "12:00pm",
      location: "REC",
      Date: "Mañana Mmg",
      title: "Football vs. Minot State",
      imguri:
        "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
    },
    {
      timeStart: "10:00am",
      timeEnd: "12:00pm",
      location: "REC",
      Date: "Mañana Mmg",
      title: "Football vs. Minot State",
      imguri:
        "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
    },
  ];
  const images = [
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
    { uri: 'https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg' },
  ];
  return (

      <ScrollView style={{marginTop:40}}>
        <View style={styles.headerContainer}>
          <View style={styles.buttonsContainer}>
            <View>
              <AntDesign
                name="left"
                size={35}
                color={ColorsS.Secondary}
                style={{ fontWeight: "bold" }}
              />
            </View>
            <View>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={35}
                color={ColorsS.Secondary}
              />
            </View>
          </View>
        </View>
        <View style={styles.profileDataContainer}>
          <Text style={styles.profileName}>Call Buddy Team</Text>
          <Image source={{ uri: "null" }} style={styles.image}></Image>
          <Text style={styles.userName}>@{"calbuddyteam"}</Text>
          <Text style={styles.descripton}>Developing team of calBuddy 👾</Text>
          <View style={styles.followersAndPostsContainer}>
            <View style={styles.countAndTitleContainer}>
              <Text style={styles.countStyling}>1300</Text>
              <Text style={{ color: ColorsS.Primary }}>Friends</Text>
            </View>
            <View style={styles.countAndTitleContainer}>
              <Text style={styles.countStyling}>20</Text>
              <Text style={{ color: ColorsS.Primary }}>Posts</Text>
            </View>
            {/* Manual <hr> */}
          </View>
          <View
            style={{
              borderBottomColor: "#D3D3D3",
              borderBottomWidth: 1,
              width: "92%",
            }}
          />
        </View>

        <View>
          <Text style={styles.contentHeading}>Interests</Text>
          <FlatList
            data={interest}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 13, paddingHorizontal: 15 }}
            renderItem={({ item, index }) => (
              <InterestCard key={index} emoji={item.emoji} title={item.title} />
            )}
          ></FlatList>
        </View>

        <View>
          <Text style={styles.contentHeading}>Attended Events</Text>
          <FlatList
            data={attendedEvents}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 15,
              gap: 20,
              height: height * 0.16,
              marginVertical: 10,
            }}
            renderItem={({ item, index }) => (
              <SimpleEventCard
                key={index}
                title={item.title}
                img={item.imguri}
                widthOfCard={width * 0.65}
              />
            )}
          ></FlatList>
        </View>

        <View>
          <Text style={styles.contentHeading}>Videos</Text>
        </View>
        <View style={styles.videosContainer}>
      {images.map((image, index) => (
        <VideoPreviewCard key={index} video={image.uri}/>
      ))}
    </View>
        
      </ScrollView>

  );
}

const styles = StyleSheet.create({
  headerContainer: {
    margin: 15,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  profileDataContainer: {
    alignItems: "center",
  },
  profileName: {
    fontSize: 25,
    fontWeight: "bold",
    color: ColorsS.Primary,
    paddingBottom: 15,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "black",
    marginBottom: 10,
  },
  userName: {
    fontWeight: "bold",
    color: ColorsS.Primary,
    paddingBottom: 4,
  },
  descripton: {
    paddingBottom: 15,
    color: ColorsS.Primary,
  },
  followersAndPostsContainer: {
    flexDirection: "row",
    alignContent: "space-evenly",
    alignItems: "stretch",
    gap: 60,
    paddingBottom: 20,
  },
  countAndTitleContainer: {
    alignItems: "center",
  },
  countStyling: {
    color: ColorsS.Primary,
    fontWeight: "bold",
  },
  contentHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: ColorsS.Primary,
    marginHorizontal: 15,
    marginTop: 10,
  },
  videosContainer:{
      flexDirection: 'row',
      flexWrap: 'wrap', // This will wrap the images into new rows
      justifyContent: 'space-between', // Distribute the space between images
      padding: 10,
  }
});
