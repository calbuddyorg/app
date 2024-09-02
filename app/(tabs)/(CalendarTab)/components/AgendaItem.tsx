
import { ColorsS } from '@/styles/Colors';
import React, {useCallback} from 'react';
import {StyleSheet, Alert, View, Text, TouchableOpacity, Button} from 'react-native';



interface ItemProps {
  item: any;
}

const AgendaItem = (props: ItemProps) => {
  const {item} = props;

  const buttonPressed = useCallback(() => {
    Alert.alert('Show me more');
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (!item) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity onPress={itemPressed} style={styles.item}>
      {/* <View>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
      <Text style={styles.itemTitleText}>{item.title}</Text>
      <View style={styles.itemButtonContainer}>
        <Button color={'grey'} title={'Info'} onPress={buttonPressed}/>
      </View> */}
      <View style={styles.titleContainer}>
        <View style={styles.dot}></View>
        <Text style={styles.itemTitleText}>{item.title}</Text>
      </View>
      
      <View style={styles.itemTimeContainer}>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(AgendaItem);


const styles = StyleSheet.create({
  item: {
    padding: 20,
    backgroundColor: ColorsS.LIGHT_GRAY_Background,
    paddingTop:5,
    
  },
  itemTimeContainer:{
    marginLeft:4,
    paddingLeft:12,
    borderLeftWidth:2,
    borderLeftColor:ColorsS.Secondary
  },
  itemHourText: {
    color: 'black'
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4
  },
  itemTitleText: {
    color: ColorsS.Primary,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  titleContainer:{
    alignItems:'baseline',
    flexDirection: 'row'
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end'
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey'
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14
  },
  dot:{
    height: 10,
    width: 10,
    backgroundColor: ColorsS.Secondary,
    borderRadius: 50,
  }
});