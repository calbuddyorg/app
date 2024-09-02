import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//I dont thing i am goign to need the types for this one
// interface UserHeaderProps {
//   userName: string;
//   userImage: string;
// }

// const UserHeader: React.FC<UserHeaderProps> = ({ userName, userImage }) => {
const UserHeader = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: "null"}} style={styles.image} />
      <Text style={{fontSize:18}}>Hi, <Text style={styles.name}>{'Call Buddy Team'}!</Text></Text>
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
