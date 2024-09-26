import { Image, StyleSheet, View, Text, Dimensions } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import React from 'react';
import { ColorsS } from '@/styles/Colors';

interface SimpleEventCardProps {
    title: string,
    img: string,
    widthOfCard: number
}

const SimpleEventCard: React.FC<SimpleEventCardProps>= ({title, img, widthOfCard}) =>{
    const width = widthOfCard;
  return (
    <>


        

        

        {/* LinearGradient is placed after the image but absolutely positioned to overlay */}
        
        
        
        <View style={[styles.ImgContainer,{width:width, borderRadius:20}]}>
        <Image 
            borderRadius={20}
          style={styles.imgStyling}  
          source={{uri:"https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg"}}
        />
        <View style={{...StyleSheet.absoluteFillObject, borderRadius:20}}>
            <LinearGradient  
            colors={['transparent',ColorsS.BLACK]}
            style={{flex: 1, borderRadius:20}}
        /> 
        <Text style={styles.imageCaption}>{title}</Text>
        </View>
        </View>
       

      </>


  );
}

export default SimpleEventCard;
const styles = StyleSheet.create({
    ImgContainer:{
        backgroundColor:'blue',
        height:"100%",
    },
  imgStyling: {
        width:"100%",
        height:"100%",


    },

  overLay: {

    top: '50%', 



  },
  imageCaption:{
    position:'absolute',
    color:ColorsS.WHITE,
    fontSize:19,
    bottom:0,
    fontWeight:'bold',
    marginHorizontal:10,
    marginBottom:5
  }
});
