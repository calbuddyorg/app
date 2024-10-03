import { Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const user = {
  id:123,
  userName: 'CalBuddyTeam',
  name: 'Cal Buddy Team',
  description: 'Developing team of CalBuddy',
  interest:[
    { title: "soccer", emoji: "⚽️" },
    { title: "soccer", emoji: "⚽️" },
    { title: "soccer", emoji: "⚽️" },
    { title: "soccersoccersoccer", emoji: "⚽️" }],
  videos:[
    {
      uri: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
    },
    {
      uri: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg",
    },
    {
      uri: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg",
    },
    {
      uri: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg",
    },
    {
      uri: "https://images.pexels.com/photos/433989/pexels-photo-433989.jpeg?cs=srgb&dl=pexels-pixabay-433989.jpg&fm=jpg",
    },
    {
      uri: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
    },
  ],
  friends:["123","1234","12345"],
  attendedEvents: [
    {
      timeStart: "10:00am",
      timeEnd: "12:00pm",
      location: "Dorms",
      Date: "Mañana",
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
      location: "Cafeteria",
      Date: "Mañana Mmg",
      title: "Football vs. Minot State",
      imguri:
        "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
    },
  ]

}

function handlePress() {}
// const UserHeader: React.FC<UserHeaderProps> = ({ userName, userImage }) => {
const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "null" }} style={styles.image}></Image>
      <Link href={{pathname:"/pages/UserProfilePage/"+user.id,
        params:{
                  name: user.name,
                  UserName: user.userName,
                  Description: user.description,
                  Friends: user.friends,
                  interests: JSON.stringify(user.interest),
                  attendedEvents:  JSON.stringify(user.attendedEvents),
                  videos:  JSON.stringify(user.videos),
        }
      }}  asChild >
        <Pressable onPress={handlePress}>
          <Text style={{ fontSize: 18 }}>
            Hi, <Text style={styles.name}>{user.name}!</Text>
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "black",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserHeader;
