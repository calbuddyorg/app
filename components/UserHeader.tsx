
import { Link } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

//I dont think i am goign to need the types for this one
// interface UserHeaderProps {
//   userName: string;
//   userImage: string;
// }

function handlePress(){
  console.log("Se presiono")
}
// const UserHeader: React.FC<UserHeaderProps> = ({ userName, userImage }) => {
const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "null"}} style={styles.image} ></Image>
      <Link href="/pages/UserProfilePage/UserProfilePage" asChild >
      <Pressable onPress={handlePress}><Text style={{fontSize:18}}>Hi, <Text style={styles.name}>{'Call Buddy Team'}!</Text></Text></Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor:'black'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default UserHeader;
