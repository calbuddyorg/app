import BottomSheet from '@gorhom/bottom-sheet';
import { useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function TabOneScreen() {
	const snapPoints = useMemo(() => ['25%', '50%', '70%'], []);

	return (
    <GestureHandlerRootView>
		<View style={styles.container}>
			<BottomSheet index={1} snapPoints={snapPoints} enablePanDownToClose={true}>
				<View style={styles.contentContainer}>
					<Text style={styles.containerHeadline}>Awesome Bottom Sheet 🎉</Text>
				</View>
			</BottomSheet>
		</View>
    </GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
		flex: 1,
		alignItems: 'center'
	},
	containerHeadline: {
		fontSize: 24,
		fontWeight: '600',
		padding: 20
	}
});
