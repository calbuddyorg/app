import {
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import React, { useCallback, useRef, useState } from "react";

import {
  ExpandableCalendar,
  CalendarProvider,
  AgendaList,
} from "react-native-calendars";

import { agendaItems, getMarkedDates } from "@/constants/agendaItems";
import AgendaItem from "./components/AgendaItem";
import UserHeader from "@/components/UserHeader";
import DateHeader from "./components/DateHeader";
import { ColorsS } from "@/styles/Colors";
import NewEvent from "./components/NewEvent";
import BottomSheet from "@gorhom/bottom-sheet";

const ITEMS: any[] = agendaItems;

export default function calendarScreen() {
  const [addEvent, setAddEvent] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const marked = useRef(getMarkedDates());
  const renderItem = useCallback(({ item }: any) => {
    return <AgendaItem item={item} />;
  }, []);
  function toggleModal() {
    setAddEvent(!addEvent);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor:ColorsS.LIGHT_GRAY_Background}}>
      <View style={styles.headers}>
        <UserHeader />
        <DateHeader openAddEventModal={toggleModal} />
      </View>

      <CalendarProvider
        date={"2024-07-23"}
        // onDateChanged={onDateChanged}
        // onMonthChange={onMonthChange}
        showTodayButton={!addEvent}
      >
        <ExpandableCalendar
          // renderHeader={()=>undefined}
          style={styles.calendar}
          // horizontal={false}
          hideArrows
          disablePan={false}
          // hideKnob
          // disableWeekScroll
          // animateScroll
          // closeOnDayPress={false}
          // disableAllTouchEventsForDisabledDays
          initialPosition={ExpandableCalendar.positions.OPEN}
          firstDay={1}
          markedDates={marked.current}
          theme={calentarStyling}
        />

        
        <NewEvent show={addEvent} setShow={setAddEvent}></NewEvent>

        <AgendaList
        style={{marginTop:-25}}
          sections={ITEMS}
          renderItem={renderItem}
          sectionStyle={styles.section}
        />
      </CalendarProvider>
    </SafeAreaView>
  );
}
const calentarStyling = {
  calendarBackground: ColorsS.LIGHT_GRAY_Background,
  selectedDayBackgroundColor: ColorsS.Secondary,
  selectedDayTextColor: ColorsS.WHITE,
  todayBackgroundColor: ColorsS.Primary,
  todayTextColor: ColorsS.WHITE,
  dotColor: ColorsS.Primary,
  textDayFontWeight: "bold",
  textDayHeaderFontWeight: "bold",
  textSectionTitleColor: ColorsS.Secondary,
  arrowColor: "transparent",
  todayButton: { display: "none" },
};

const styles = StyleSheet.create({
  todayButton: {
    display: "none",
  },
  calendar: {
    elevation: 0, // remove shadow on Android
    shadowOpacity: 0, // remove shadow on iOS
    marginTop: -28,
  },
  section: {
    backgroundColor: ColorsS.LIGHT_GRAY_Background,
    color: ColorsS.Secondary,
    textTransform: "capitalize",
    fontSize: 16,
  },
  headers: {
    padding: 20,
  },
  agenda: {
    backgroundColor: ColorsS.Secondary,
  },
});
