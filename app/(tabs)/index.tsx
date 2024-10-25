import ContentHeaders from "@/components/ContentHeader";
import CustomeBadge from "@/components/CustomeBadge";
import SliderForEvents from "@/components/SliderForEvents";
import Slider from "@/components/TrendingSlider";
import UserHeader from "@/components/UserHeader";
import { EventInformationType } from "@/interfaces";
import { ColorsS } from "@/styles/Colors";
import { memo, useMemo, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import EventDetailCard from "@/components/EventDetailsCard";
import BottomSheet from "@gorhom/bottom-sheet";
import { initialValues } from './(CalendarTab)/components/NewEventForm/NewEventFormConstants';
const { height, width } = Dimensions.get("window");
const ComingUp: EventInformationType[] = [
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
      imguri:"https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
    },
  ];


const DefaultContent = memo(() => (
  <View>
    <View>
      <View>
        <ContentHeaders text="Trending Events" isViewAll={false} />
      </View>

      <Slider />
    </View>
    <View >
      <ContentHeaders text="Coming up" isViewAll={true} />
		<FlatList data={ComingUp} contentContainerStyle={{paddingLeft:15, gap:15, paddingTop:10}} showsHorizontalScrollIndicator={false} renderItem={({item,index})=>(<EventDetailCard key={index} event={item} widthOfCard={width * 0.6} heightOfCard={height * 0.15}/>)} horizontal/>
    </View>
  </View>
));

const selectCat = () => {
  <View>
    <Text>Klk</Text>
  </View>
}

const facilities: EventInformationType[] = [

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

const categories = [
	{ title: "Facilities", emoji: "F", url: "https://api.example.com/facilities" },
	{ title: "Clubs", emoji: "C", url: "https://api.example.com/events?category=clubs" },
	{ title: "Sports", emoji: "S", url: "https://api.example.com/events?category=sports" }
  ]
  

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ["25%", "50%", "70%"], []);
  const [addEvent, setAddEvent] = useState(false);
  const { height, width } = Dimensions.get("window");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const filteredItems = selectedCategory
    ? categories.filter((item) => item.title === selectedCategory)
    : [];

  const categoryPressed = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileHeader}>
        <UserHeader />

        <Text
          style={{
            paddingTop: 10,
            fontWeight: "bold",
            color: ColorsS.Primary,
            fontSize: width * 0.08,
          }}
        >
          Southwest Minnesota State University
        </Text>
      </View>

      <ScrollView 
  style={{ paddingTop: 10 }} 
  
>
  <View>
    <ContentHeaders text="Categories" isViewAll={false} />
  </View>

  <FlatList
    data={categories}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingLeft: 20, gap: 20, marginBottom:10, marginTop:10 }}
    renderItem={({ item, index }) => (
      <TouchableOpacity onPress={() => categoryPressed(item.title)}>
        <CustomeBadge
          key={index}
          active={selectedCategory === item.title}
          title={item.title}
          emoji={item.emoji}
        />
      </TouchableOpacity>
    )}
    scrollEnabled={false} // Disable FlatList's scrolling
  />

  <View style={{ paddingBottom: 50 }}> 
    {selectedCategory ? <SliderForEvents events={facilities} widthOfCard={width*0.90} horizontal={false} heightOfCard={height*0.20}/> : <DefaultContent />}
  </View>
</ScrollView>
<GestureHandlerRootView>
    	<View style={styles.container}>
    		<BottomSheet index={1} snapPoints={snapPoints} enablePanDownToClose={true}>
    			<View style={styles.contentContainer}>
    				<Text>klk </Text>
    			</View>
    		</BottomSheet>
    	</View>
    </GestureHandlerRootView>
    </SafeAreaView>

    
  );
}

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20, // Ensure last card is visible by adding extra padding
    gap: 15,
    marginVertical: 10,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
  },
  profileHeader: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  containerHeadline: {
    fontSize: 24,
    fontWeight: "600",
    padding: 20,
  },
});
