import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { EventInformationType } from "@/interfaces";
import SimpleEventCard from './SimpleEventCard';


type SliderItemProps = {
  events: EventInformationType[];
  widthOfCard: number;
  heightOfCard?: number;
  horizontal?: boolean 
}

const SliderForEvents = ({events, widthOfCard, heightOfCard, horizontal = true}:SliderItemProps) => {
  return (
    <View>
      <FlatList
        contentContainerStyle={[styles.contaiiner]}
        data={events}
        renderItem={({ item, index }) => (
          <SimpleEventCard key={index} event={item} widthOfCard={widthOfCard} heightOfCard={heightOfCard} />
        )}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}


export default SliderForEvents;

const styles = StyleSheet.create({
  contaiiner:{
    paddingTop:10,
    gap:20,
    paddingLeft:20
  }
});
