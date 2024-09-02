import { ColorsS } from "@/styles/Colors";
import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Button,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import TimePicker from "./TimePicker";



interface NewEventProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewEvent: React.FC<NewEventProps> = ({ show, setShow }) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setShow(false); // Close the modal
        }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding" // Changed to "padding"
          keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0} // Adjust the offset for iOS if needed
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.headerContainer}>
                  <Text style={styles.modalText}>Create Event</Text>
                  <TouchableOpacity onPress={() => setShow(false)}>
                    <Fontisto
                      name="close"
                      size={30}
                      color={ColorsS.Secondary}
                    />
                  </TouchableOpacity>
                </View>

                <TextInput
                  placeholder="Title"
                  editable
                  style={styles.titleInput}
                />
                <TextInput
                  placeholder="Description"
                  editable
                  multiline
                  numberOfLines={4}
                  style={styles.descriptionInput}
                  textAlignVertical="top"
                />
                <View>
                  <TimePicker/>


                </View>
              </View>
              
            </View>
            
          </TouchableWithoutFeedback>
          
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    bottom: -25,
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: ColorsS.LIGHT_GRAY_Background,
    borderTopEndRadius: 20,
    padding: 35,
    width: "100%",
    height: "50%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    fontSize: 30,
    fontWeight: "bold",
    color: ColorsS.Primary,
  },
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
});

export default NewEvent;
