import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type TopbarProps = {
  timer: number;
};

export default function Topbar({timer}: TopbarProps): JSX.Element {
  return (
    <View style={styles.topBar}>
      <View style={styles.timer}>
        <Icon
          name="stopwatch"
          color="white"
          style={styles.stopwatch}
          size={20}
        />
        <Text style={styles.stopwatchReading}>{timer}m</Text>
      </View>
      <View>
        <Text style={styles.forYou}>For You</Text>
        <View style={styles.forYouBorder} />
      </View>
      <Icon name="search" color="white" size={22} />
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    width: '100%',
    top: 52,
    justifyContent: 'space-around',
    color: 'white',
    height: 31,
    position: 'absolute',
    zIndex: 2
  },
  timer: {
    display: 'flex',
    flexDirection: 'row',
    opacity: 0.6,
  },
  stopwatch: {
    marginRight: 5,
  },
  stopwatchReading: {
    fontSize: 14,
  },
  forYou: {
    fontSize: 16,
    color: 'white',
  },
  forYouBorder: {
    backgroundColor: 'white',
    height: 4,
    width: 30,
    alignSelf: 'center',
    borderRadius: 5,
    marginTop: 5,
  },
});
