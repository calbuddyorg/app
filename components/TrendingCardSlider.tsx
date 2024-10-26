import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/interfaces'
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Link } from 'expo-router';
import { ColorsS } from '@/styles/Colors';

type SliderItemProps = {
    item: ImageSliderType;
    index: number
    scrollX: SharedValue<number>
}

const { width } = Dimensions.get('screen')

// Adjusting the size reduction factor for the card
const CARD_WIDTH = width * 0.75;
const CARD_HEIGHT = 250; // Reduced height

const SliderCard = ({ item, index, scrollX }: SliderItemProps) => {
  const rnAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [-width * 0.25, 0, width * 0.25],
            Extrapolation.CLAMP
          ),
        },
        {
          scale: interpolate(
            scrollX.value,
            [(index - 1) * width, index * width, (index + 1) * width],
            [0.9, 1, 0.9],
            Extrapolation.CLAMP
          ),
        }
      ],
    };
  });

  return (
    <Animated.View style={[styles.itemContainer, rnAnimatedStyle]}>
      <Link
        href={{
          pathname: "pages/" + 1,
          params: {
            title: item.title,
            timeStart: 'klk',
            timeEnd: 'klk',
            location: 'klk',
            Date: 'klk',
          },
        }}
      >
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            borderRadius={20}
          />
          <LinearGradient
            colors={['transparent', 'rgba(0,0,0,0.8)']}
            style={styles.gradientBackground}
          >
            <View style={styles.textContainer}>
              <Text style={styles.imageCaption}>{item.title}</Text>
            </View>
          </LinearGradient>
        </View>
      </Link>
    </Animated.View>
  )
}

export default SliderCard;

const styles = StyleSheet.create({
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    marginBottom: 10,
  },
  imageContainer: {
    width: CARD_WIDTH, // Reduced width
    height: CARD_HEIGHT, // Reduced height
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  gradientBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    borderRadius: 20,
  },
  textContainer: {
    padding: 15, // Adjust padding as needed
  },
  imageCaption: {
    color: ColorsS.WHITE,
    fontSize: 18, // Adjust font size if needed for smaller cards
    fontWeight: "bold",
  }
});
