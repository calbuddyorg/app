import {
  Button,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import DateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { ColorsS } from "@/styles/Colors";

type TimePickerProps = {
  title: any;
  selectedDate: Date;
  selectedTime: Date;
  minDate?: Date;
  onDateChange: (date: Date | undefined) => void;
  onTimeChange: (time: Date | undefined) => void;
};
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
export default function TimePicker({
  title,
  selectedDate,
  selectedTime,
  minDate,
  onDateChange,
  onTimeChange,
}: TimePickerProps) {
  const handleDateChange = (event: DateTimePickerEvent, date?: Date) => {
    if (date) {
      onDateChange(date); // Only call if a valid date is selected
    }
  };
  const handleTimeChange = (event: DateTimePickerEvent, time?: Date) => {
    if (time) {
        onTimeChange(time); 
    }
  };

  const value = new Date(); 

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          alignItems: "center",
        }}
      >
        <View style={{ width: "14%" }}>
          <Text style={styles.secondaryHeading}>{title}</Text>
        </View>

        <DateTimePicker onChange={handleTimeChange} mode="time" value={selectedTime}></DateTimePicker>

        <DateTimePicker
          value={selectedDate}
          minimumDate={minDate} // Optional: Only used for the end date to enforce min date
          onChange={handleDateChange}
        ></DateTimePicker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    borderColor: ColorsS.Primary,
    borderRadius: 99,
    borderWidth: 1,
    margin: 10,
    alignSelf: "stretch",
  },
  confirmButton: {
    backgroundColor: ColorsS.Primary,
    borderRadius: 99,
    margin: 10,
    alignSelf: "stretch",
  },
  secondaryHeading: {
    color: ColorsS.Primary,
    fontWeight: "bold",
    fontSize: 20,
  },
});
