import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import { initialValues } from "./NewEventFormConstants";
import TimePicker from "../TimePicker";
import { ColorsS } from "@/styles/Colors";
import { SchemaNewEvent } from "@/schemas/NewEventSchema";

export default function NewEventForm() {
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startTime, setStartTime] = useState<Date>(new Date());
  const [endTime, setEndTime] = useState<Date>(new Date());

  const handleStartTimeChange = (selectedTime: Date | undefined) => {
    if (selectedTime) {
      console.log("eligio");
      setStartTime(selectedTime);
    }
  };

  const handleEndTimeChange = (selectedTime: Date | undefined) => {
    if (selectedTime) {
      setEndTime(selectedTime);
    }
  };

  // Handle start date change
  const handleStartDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setStartDate(selectedDate);
      console.log(selectedDate);
      // If the selected start date is after the current end date, update the end date
      if (selectedDate > endDate) {
        setEndDate(selectedDate);
      }
    }
  };

  // Handle end date change
  const handleEndDateChange = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={SchemaNewEvent}
      >
        {({
          handleChange,
          handleBlur,
          setFieldValue,
          handleSubmit,
          values,
          errors,
          isValid,
        }) => (
          <View>
            <TextInput
              placeholder="Title"
              editable
              style={styles.titleInput}
              onChangeText={handleChange("title")}
              onBlur={handleBlur("title")}
              value={values.title}
            />
            {errors.title && (
              <Text style={{ fontSize: 10, color: "red", marginTop:-15, marginBottom:15 }}>{errors.title}</Text>
            )}

            <TextInput
              placeholder="Description"
              editable
              multiline
              numberOfLines={4}
              style={styles.descriptionInput}
              textAlignVertical="top"
              onChangeText={handleChange("description")}
              onBlur={handleBlur("description")}
              value={values.description}
            />
            <View style={styles.timePickercontainer}>
              <TimePicker
                selectedDate={startDate}
                selectedTime={startTime}
                onDateChange={(date) => {
                  if (date) {
                    // Ensure only a valid date is passed
                    setFieldValue("startDate", date);
                    handleStartDateChange(date); // Only update state if a valid date is selected
                  }
                }}

                onTimeChange={(time) => {
                  if (time) {
                    setFieldValue("startTime", time);
                    handleStartTimeChange(time);
                  }
                }}
                title={"Start"}
              />
            </View>
            <TimePicker
              selectedDate={endDate}
              selectedTime={endTime}
              minDate={startDate}
              onDateChange={(date) => {
                if (date) {
                  // Ensure only a valid date is passed
                  setFieldValue("endDate", date);
                  handleEndDateChange(date); // Only update state if a valid date is selected
                }
              }}
              onTimeChange={(time) => {
                if (time) {
                  setFieldValue("endTime", time);
                  handleEndTimeChange(time);
                }
              }}
              title={"End"}
            />

            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.saveButtonStyling}
              disabled={!isValid}
            >
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  titleInput: {
    height: 40,
    padding: 10,
    width: "100%",
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
    marginVertical: 20,
    borderRadius: 10,
  },
  descriptionInput: {
    padding: 10,
    backgroundColor: "white",
    height: 100,
    maxHeight: 100,
    width: "100%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1,
    elevation: 3,
  },
  saveButtonStyling: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    bottom: -20,
    alignSelf: "center",
    backgroundColor: ColorsS.Secondary,
    borderRadius: 50,
  },
  saveButtonText: {
    color: ColorsS.WHITE,
    fontWeight: "bold",
    fontSize: 20,
  },
  timePickercontainer: {
    marginVertical: 20,
  },
});
