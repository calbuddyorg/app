import React, { useCallback, useMemo, forwardRef } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { IEventInformation } from "@/interfaces";

interface CustomeButtomSheetProps {
  data: IEventInformation | null;
  ref: React.Ref<BottomSheet>;
}

const CustomeButtomSheet = forwardRef<BottomSheet, CustomeButtomSheetProps>(
  ({ data }, ref) => {
    const snapPoints = useMemo(() => ["25%"], []);

    const handleSheetChange = useCallback((index: number) => {
      console.log("handleSheetChange", index);
    }, []);

    const handleSnapPress = useCallback((index: number) => {
      if (ref && typeof ref !== "function") {
        ref.current?.snapToIndex(index);
      }
    }, [ref]);

    const handleClosePress = useCallback(() => {
      if (ref && typeof ref !== "function") {
        ref.current?.close();
      }
    }, [ref]);

    return (
      <>
        <BottomSheet
          ref={ref}
          snapPoints={snapPoints}
          enableDynamicSizing={false}
          onChange={handleSheetChange}
          enablePanDownToClose
          index={-1}
        >
          <BottomSheetView style={styles.contentContainer}>
            <Text>{data?.title}</Text>
            <Text>{data?.location}</Text>
            <Text>{data?.Date}</Text>
            <Text>{data?.timeStart} - {data?.timeEnd}</Text>
          </BottomSheetView>
        </BottomSheet>
      </>
    );
  }
);

const styles = StyleSheet.create({
  contentContainer: {
    margin:20
  },
});

export default CustomeButtomSheet;
