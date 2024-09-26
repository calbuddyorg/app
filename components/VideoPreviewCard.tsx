import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface SimpleEventCardProps {
    video: string; 
}
const { width } = Dimensions.get('window');

const VideoPreviewCard:React.FC<SimpleEventCardProps>=({video}) => {
  return (
    <View style={styles.mainContent}>
<Image style={styles.image} source={{uri:video}}/>
      <View ></View>
    </View>
  )
}

export default VideoPreviewCard;

const styles = StyleSheet.create({
    mainContent:{

    },
    image: {
        width: (width - 40) / 3, 
        height: 200, 
        marginBottom: 10, 
        backgroundColor:'red'
      },
})