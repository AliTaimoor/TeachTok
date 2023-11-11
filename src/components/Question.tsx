import {Dimensions, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Text, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MCQ from './MCQ';
import ActionBar from './ActionBar';
import { MCQ_Option, MultipleChoiceQuestion } from '../types';

const SCREEN_HEIGHT = Dimensions.get('window').height;

type HomeProps = {
  timer: number,
  mcq: MultipleChoiceQuestion,
  correctAnswers: MCQ_Option[],
  selectOption: (option: MCQ_Option) => void
}

export default function Question({ timer, mcq, correctAnswers, selectOption }: HomeProps): JSX.Element {
  return (
    <>
      <ImageBackground
        resizeMode="cover"
        style={styles.postImage}
        imageStyle={{opacity: 0.45}}
        source={{
          uri: mcq.image
        }}>
        <View style={styles.mainContainer}>
          <View style={styles.question}>
            <MCQ mcq={mcq} correctAnswers={correctAnswers} select={selectOption} />
            <View style={styles.description}>
              <Text style={styles.author}>{mcq.user.name}</Text>
              <Text style={styles.contentDescription}>
                {mcq.description}
              </Text>
            </View>
          </View>
          <View style={styles.actionBar}>
            <ActionBar avatar={mcq.user.avatar} />
          </View>
        </View>
      </ImageBackground>
      <View style={styles.playlistBar}>
        <View style={styles.playlist}>
          <Icon
            name="play"
            color="white"
            size={13}
            style={styles.playlistIcon}
          />
          <Text style={styles.playlistTitle}>
            Playlist • {mcq.playlist}
          </Text>
        </View>
        <FontAwesomeIcon
          name="chevron-right"
          color="white"
          style={styles.playlistIcon}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  postImage: {
    flex: 1,
    justifyContent: 'center',
    height: SCREEN_HEIGHT,
    paddingTop: 92
  },
  mainContainer: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
    paddingBottom: 25,
    gap: 12,
  },
  question: {
    gap: 24,
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  actionBar: {
    maxWidth: 45,
    flex: 1,
    gap: 15,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  playlistBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingRight: 16,
    paddingBottom: 10,
    paddingLeft: 16,
    backgroundColor: '#161616',
    height: 36,
  },
  playlist: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
  },
  playlistTitle: {
    fontSize: 13,
    fontWeight: '600',
    lineHeight: 15,
    color: 'white',
  },
  playlistIcon: {
    fontWeight: '700',
    lineHeight: 15,
  },
  description: {
    display: 'flex',
    gap: 6,
  },
  author: {
    fontSize: 15,
    fontWeight: '600',
    color: 'white',
    lineHeight: 18,
  },
  contentDescription: {
    fontSize: 13,
    fontWeight: '400',
    color: 'white',
    lineHeight: 15,
  },
});
