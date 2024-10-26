import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/interfaces'
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated'
import { ColorsS } from '@/styles/Colors'

type PaginationProps = {
    items: ImageSliderType[];
    paginationIndex: number;
    scrollX: SharedValue<number>;
}
const {width}= Dimensions.get('screen');

const Pagination = ({items, paginationIndex, scrollX}: PaginationProps) => {
  return (
    <View style={styles.constainer}>
      {items.map((_,index)=>{
        const pgAnimationStyle = useAnimatedStyle(()=>{
            const dotWidth = interpolate(
                scrollX.value,
                [(index-1) * width, index * width, (index+1) * width],
                [8,20, 8],
                Extrapolation.CLAMP
            );
            return{
                width:dotWidth
            }
        })
        return(
            <Animated.View key={index} style={[styles.dot ,{backgroundColor:paginationIndex === index ? ColorsS.Primary : ColorsS.Secondary}]}/>
        )
      })}
    </View>
  )
}

export default Pagination;

const styles = StyleSheet.create({
    constainer:{
        flexDirection:'row',
        height:15,
        justifyContent:'center',
        alignItems:'center'
    },
    dot:{
        backgroundColor:'#aaa',
        height:8,
        width:8,
        marginHorizontal:2,
        borderRadius:8
    }
})