import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons';

import { getFormatDate } from '@/utils/getCurrentDate';
import { ColorsS } from '../../../../styles/Colors';

type DateHeaderProps = {
    openAddEventModal: any
  };

export default function DateHeader({ openAddEventModal}: DateHeaderProps) {
    const currentDate = new Date();
    const formattedDate = getFormatDate(currentDate);
    const handlePress = () => {
        openAddEventModal();  
      };
  return (
    <View style={styles.container}>
    <View>
        <Text style={styles.date}>{formattedDate}</Text>
    </View>
    <View style={styles.todayContainer}>
        
        <View>
            <Text style={styles.today}>Today</Text>
        </View>

        <View>
            <TouchableOpacity onPress={handlePress}>
                <Feather name="plus-circle" size={28} color={ColorsS.Secondary} />
            </TouchableOpacity>
        </View>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:6,
        paddingTop:3,
    },
    date:{
        fontSize:16,
        paddingBottom:10,
        color:ColorsS.Secondary
    },
    today:{
        fontWeight:'bold',
        fontSize:24,
        color:ColorsS.Primary
    },
    todayContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',



    }
})