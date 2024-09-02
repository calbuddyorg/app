import { Button, Platform, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import DateTimePicker, { DateTimePickerAndroid, DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { ColorsS } from '@/styles/Colors';


export default function TimePicker() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const toggleDatePicker=()=>{
    setShowPicker(!showPicker)
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
}
// Set time for IOS Device
const confirmIOSDate = () =>{
    setDate(date);
    formatTime(date);
    toggleDatePicker();
}

// Set time for andorid devices
const onChange = ({type}: any, selectedDate: any)=>{
    if (type=="set") {
        const currentDate= selectedDate;
        setDate(currentDate);
        if (Platform.OS === "android") {
            toggleDatePicker();
            setDate(currentDate.getTime())
        }

    }else{
        toggleDatePicker()
    }
}
  return (
  <View>
    <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', marginHorizontal:10}}>
    <View>
        <Text style={styles.secondaryHeading}>Hola</Text>
    </View>
    {/* And button to diplay time picker */}
    <View>
    {!showPicker && (
        <Pressable onPress={toggleDatePicker}>
            <View style={{backgroundColor:ColorsS.LIGHT_GRAY_Background,
                          borderRadius:10, 
                          paddingHorizontal:10}}>
            <Text style={styles.timeStyling}>{formatTime(date)}</Text>
            </View>
        </Pressable>)}
    </View>
</View>

{showPicker&&(
  <View style={{backgroundColor:ColorsS.LIGHT_GRAY_Background,
      borderRadius:10}}>
<DateTimePicker mode="time"
                display='spinner'
                value={date}
                onChange={onChange}
                style={styles.datePicker}></DateTimePicker>
                </View>
)}

  {/* Confirm time button */}
  {showPicker&&Platform.OS==='ios'&&(
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
          <View style={{flex:1}}>
              <TouchableOpacity style={styles.closeButton} onPress={confirmIOSDate}><Text style={{fontSize:20, padding:5, alignSelf:'center'}}>Close</Text></TouchableOpacity>
          </View>
          <View style={{flex:1}}>
              <TouchableOpacity style={styles.confirmButton} onPress={confirmIOSDate}><Text style={{fontSize:20,padding:5, alignSelf:'center', color:ColorsS.LIGHT_GRAY_Background}}>Confirm</Text></TouchableOpacity>
          </View>
          
      </View>
  )}
  </View>
    
  )
}


const styles = StyleSheet.create({
  closeButton:{
      borderColor:ColorsS.Primary,
      borderRadius:99,
      borderWidth:1,
      margin:10,
      alignSelf:'stretch'

  },
  confirmButton:{
      backgroundColor:ColorsS.Primary,
      borderRadius:99,
      margin:10,
      alignSelf:'stretch'
  },
  secondaryHeading:{
      fontSize:25,
      fontFamily:'TitilliumWeb',
      color:ColorsS.Primary,
      alignItems:'center',
  },
  timeStyling:{
      fontSize:25,
      fontFamily:'TitilliumWeb',
      color:ColorsS.Primary,
      
  },
  datePicker:{
      height:120,
      marginTop:5,
      
      
  },
})