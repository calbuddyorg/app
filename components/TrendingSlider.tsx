import { StyleSheet, Text, View, FlatList, ViewToken, Dimensions } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import SliderCard from "./TrendingCardSlider";
import Animated, { scrollTo, useAnimatedRef, useAnimatedScrollHandler, useDerivedValue, useSharedValue } from "react-native-reanimated";
import Pagination from "./PaginationSlider";
import {  ImageSliderType } from "@/interfaces";


const favoriteEvents: ImageSliderType[] = [
  {
    description: "Mañana Mmg",
    title: "Football vs. Minot State",
    image:
      "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
  },
  {
    description: "Mañana Mmg",
    title: "Football vs. Minot State",
    image:
      "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
  },
  {
    description: "Mañana Mmg",
    title: "Football vs. Minot State",
    image:
      "https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?cs=srgb&dl=pexels-felixmittermeier-1459505.jpg&fm=jpg",
  },
];

export default function Slider() {
  const {width} = Dimensions.get('screen')
  const scrollx = useSharedValue(0);
  const [paginationIndex, setPaginationIndex] = useState(0);
  const [data, setData] = useState(favoriteEvents);
  const ref = useAnimatedRef<Animated.FlatList<any>>();
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const interval =  useRef<NodeJS.Timeout>();
  const offset = useSharedValue(0);

  const onScrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollx.value = e.contentOffset.x;
    },
    onMomentumEnd:(e)=>{
      offset.value = e.contentOffset.x;
    }
  })

  useEffect(()=>{
    if (isAutoPlay==true) {
      interval.current = setInterval(()=>{
        offset.value = offset.value+width
      }, 5000)
    }else{
      clearInterval(interval.current)
    }
    return ()=> {
      clearInterval(interval.current);
    }

  }, [isAutoPlay, offset, width]);

  useDerivedValue(()=> {
    scrollTo(ref, offset.value, 0 , true);
  })

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 58
  }

  const onViewableItemsChanged = ({ viewableItems }: { viewableItems: ViewToken[] }) => {
    if (viewableItems.length > 0 && viewableItems[0].index !== undefined && viewableItems[0].index !== null) {
      setPaginationIndex(viewableItems[0].index % favoriteEvents.length);
    }
  };
  

  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged}
  ])
  return (
    <View style={{paddingTop:10}}>
      <Animated.FlatList
        ref={ref}
        data={data}
        renderItem={({ item, index }) => (
          <SliderCard scrollX={scrollx} item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        removeClippedSubviews={false}
        contentContainerStyle={{paddingTop:10}}
        onScroll={onScrollHandler}
        scrollEventThrottle={16}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([...data, ...favoriteEvents])}
        onEndReachedThreshold={0.5}
        onScrollBeginDrag={()=>{
          setIsAutoPlay(false)
        }}
        onScrollEndDrag={()=>{
          setIsAutoPlay(true)
        }}
      />
      <Pagination scrollX={scrollx} items={favoriteEvents} paginationIndex={paginationIndex} />
    </View>
  );
}

const styles = StyleSheet.create({});
