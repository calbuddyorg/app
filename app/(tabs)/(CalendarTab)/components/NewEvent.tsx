import { ColorsS } from "@/styles/Colors";
import React from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";
import NewEventForm from "./NewEventForm/NewEventForm";

interface NewEventProps {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewEvent: React.FC<NewEventProps> = ({ show, setShow }) => {
  
  
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
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

                {/* Form for adding new event */}
                <NewEventForm/>
                
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
    height: "55%",
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
  
  
});

export default NewEvent;
