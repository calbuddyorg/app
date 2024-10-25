import { 
  StyleSheet, 
  Image, 
  View, 
  Text, 
  SafeAreaView, 
  FlatList, 
  Dimensions 
} from "react-native";

import UserHeader from "@/components/UserHeader";
import { ColorsS } from "@/styles/Colors";
import SimpleEventCard from '../../components/SimpleEventCard';
import SliderForEvents from "@/components/SliderForEvents";
import { EventInformationType } from "@/interfaces";

const { height, width } = Dimensions.get("window");

const favoriteEvents: EventInformationType[] = [

  {
    timeStart: "10:00am",
    timeEnd: "12:00pm",
    location: "Dorms",
    Date: "Mañana",
    title: "Football vs. Minot State",
    imguri: "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
  },
  {
    timeStart: "10:00am",
    timeEnd: "12:00pm",
    location: "REC",
    Date: "Mañana Mmg",
    title: "Football vs. Minot State",
    imguri: "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
  },
  {
    timeStart: "10:00am",
    timeEnd: "12:00pm",
    location: "Cafeteria",
    Date: "Mañana Mmg",
    title: "Football vs. Minot State",
    imguri: "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
  },
];

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View  style={styles.profileHeader}>
      <UserHeader />
      <Text style={styles.title}>Favorite Events</Text>
      </View>
      

      
      <SliderForEvents  events={favoriteEvents} widthOfCard={width * 0.9} heightOfCard={height * 0.2} horizontal={false}/>
      {/* <FlatList
        data={favoriteEvents}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <SimpleEventCard
            title={item.title}
            img={item.imguri}
            widthOfCard={width * 0.9}
            heightOfCard={height * 0.2}
          />
        )}
        contentContainerStyle={styles.flatListContent}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: ColorsS.Primary,
    paddingBottom:5
  },
  flatListContent: {
    paddingBottom: 20, // Ensure last card is visible by adding extra padding
    gap: 15,
    marginVertical: 10,
  },
  profileHeader:{
    paddingTop:20,
    marginLeft:20
  }
});
