import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ColorsS } from '@/styles/Colors'


interface ContentHeadersProps {
    text: string;
    isViewAll: boolean;
  }

const ContentHeaders: React.FC<ContentHeadersProps> = ({
    text,
    isViewAll= false
  }) => {
  return (
    <View style={styles.categoriesContainer} >
      <Text style={styles.heading}>{text}</Text>
      <TouchableOpacity>{isViewAll && <Text style={styles.viewAll}>View All</Text> }</TouchableOpacity>
    </View>
  )
}

export default ContentHeaders;

const styles = StyleSheet.create({
    heading:{
        fontSize:25,
        color:ColorsS.Primary,
        fontWeight:'700'
    },
    categoriesContainer:{
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      paddingHorizontal:20,


    },
    viewAll:{
        color:ColorsS.Secondary

    }
})

