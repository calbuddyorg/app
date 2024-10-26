// React and Core Libraries
import { memo, useRef, useState } from "react";
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
import {
  GestureHandlerRootView,
} from "react-native-gesture-handler";

// Third-Party Libraries
import BottomSheet from "@gorhom/bottom-sheet";

// Absolute Imports
import ContentHeaders from "@/components/ContentHeader";
import CustomeBadge from "@/components/CustomeBadge";
import Slider from "@/components/TrendingSlider";
import UserHeader from "@/components/UserHeader";
import EventDetailCard from "@/components/EventDetailsCard";
import SimpleEventCard from "@/components/SimpleEventCard";

// Local Imports
import CustomeButtomSheet from "../../components/bottomsheet";

// Interfaces and Styles
import { IEventInformation } from "@/interfaces";
import { ColorsS } from "@/styles/Colors";


const { height, width } = Dimensions.get("window");
const ComingUp: IEventInformation[] = [
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
];

const DefaultContent = memo(() => (
  <View>
    <View>
      <View>
        <ContentHeaders text="Trending Events" isViewAll={false} />
      </View>

      <Slider />
    </View>
    <View>
      <ContentHeaders text="Coming up" isViewAll={true} />
      <FlatList
        data={ComingUp}
        contentContainerStyle={{ paddingLeft: 15, gap: 15, paddingTop: 10 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <EventDetailCard
            key={index}
            event={item}
            widthOfCard={width * 0.6}
            heightOfCard={height * 0.15}
          />
        )}
        horizontal
      />
    </View>
  </View>
));

const selectCat = () => {
  <View>
    <Text>Klk</Text>
  </View>;
};

const facilities: IEventInformation[] = [
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
];

const categories = [
  {
    title: "Facilities",
    emoji: "F",
    url: "https://api.example.com/facilities",
  },
  {
    title: "Clubs",
    emoji: "C",
    url: "https://api.example.com/events?category=clubs",
  },
  {
    title: "Sports",
    emoji: "S",
    url: "https://api.example.com/events?category=sports",
  },
];

export default function TabOneScreen() {
  const { height, width } = Dimensions.get("window");
  
  //To toggle between content of selected cateogry or the default content
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const categoryPressed = (category: string) => {
    setSelectedCategory(category === selectedCategory ? null : category);
  };

  //Toggle bottomsheet if a card of a category is pressed
  const bottomSheetRef = useRef<BottomSheet>(null);
  const handleSnapPress = (index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  };
  const [eventSelected, seteventSelected] = useState<IEventInformation | null>(
    null
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
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

        <ScrollView style={{ paddingTop: 10 }}>
          <View>
            <ContentHeaders text="Categories" isViewAll={false} />
          </View>

          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingLeft: 20,
              gap: 20,
              marginBottom: 10,
              marginTop: 10,
            }}
            renderItem={({ item, index }) => (
              <TouchableOpacity onPress={() => {categoryPressed(item.title) 
                bottomSheetRef.current?.close()
              }}>
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

          <View style={{ paddingBottom: 50,  paddingTop: selectedCategory !== 'Facilities'? 3 : 0}}>
            {/* If a category si pressed it will show the card related to that category. If not the default content is shown. */}
            {selectedCategory ? (
              facilities.map((facility, index) => (
                <View
                  key={index}
                  style={ {alignSelf: "center", marginVertical: 7} }
                >
                  <SimpleEventCard
                    key={index}
                    event={facility}
                    widthOfCard={width * 0.9}
                    heightOfCard={height * 0.2}
                    modal={selectedCategory === 'Facilities' ? true : false}
                    onCardPress={() => {
                      seteventSelected(facility);
                      handleSnapPress(0);
                    }}
                  />
                </View>
              ))
            ) : (
              <DefaultContent />
            )}
          </View>
        </ScrollView>
        <CustomeButtomSheet ref={bottomSheetRef} data={eventSelected} />
      </SafeAreaView>
    </GestureHandlerRootView>
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
