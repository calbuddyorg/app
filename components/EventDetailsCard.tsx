import {
    Image,
    StyleSheet,
    View,
    Text,
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import React from "react";
  import { ColorsS } from "@/styles/Colors";
  import { Link } from "expo-router";
  import { EventInformationType } from "@/interfaces";
  import Ionicons from '@expo/vector-icons/Ionicons';
  
  
  interface SimpleEventCardProps {
    event: EventInformationType
    widthOfCard: number;
    heightOfCard?: number
  }
  
  const EventDetailCard: React.FC<SimpleEventCardProps> = ({
    event,
    widthOfCard,
    heightOfCard
  }) => {
    const width = widthOfCard;
    const id = 1;
    return (
      <>
        {/* LinearGradient is placed after the image but absolutely positioned to overlay */}
        <Link
                href={{
                  pathname: "pages/" + { id },
                  params: {
                    title: event.title,
                    timeStart: event.timeStart,
                    timeEnd: event.timeEnd,
                    location: event.location,
                    Date: event.Date,
                  },
                }}
              >
        <View>
        <View style={[ { width: width, borderRadius: 20, height: heightOfCard }]}>
        
            <Image
              borderRadius={8}
              style={styles.imgStyling}
              source={{
                uri: "https://www.smsu.edu/resources/webspaces/today/articles/images/mppsu222.jpg",
              }}
            />
            
              
        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{event.title}</Text>
            <View style={styles.rowContainer}>
                <Ionicons name="calendar-outline" size={24} color={ColorsS.Secondary} />
                <Text>{event.Date}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Ionicons name="time-outline" size={24} color={ColorsS.Secondary} />
                <Text>{event.timeStart} - {event.timeEnd}</Text>
            </View>
            <View style={styles.rowContainer}>
                <Ionicons name="location-outline" size={24} color={ColorsS.Secondary} />
                <Text>{event.location}</Text>
            </View>
        </View>
        </View>
        </Link>
      </>
    );
  };
  
  export default EventDetailCard;
  const styles = StyleSheet.create({
  
    imgStyling: {
      width: "100%",
      height: "100%",
    },
  
    detailsContainer:{
        marginVertical:5
    },

    title:{
        fontWeight:'bold',
    },
    rowContainer:{
        flexDirection:'row',
        alignItems:"center",
        gap:5
    }


  });
  