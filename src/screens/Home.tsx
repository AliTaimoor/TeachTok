import React, {useEffect, useMemo, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Question from '../components/Question';
import Carousel from 'react-native-snap-carousel';
import {Answer, MultipleChoiceQuestion} from '../types';
import Topbar from '../components/Topbar';

const statusBarHeight = StatusBar.currentHeight || 0;
const screenHeight = Dimensions.get('window').height + statusBarHeight;

export default function Home(): JSX.Element {

  const [questions, setQuestions] = useState<MultipleChoiceQuestion[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [timer, setTimer] = useState(30);

  const bottomTabBarHeight = useBottomTabBarHeight();
  const useableHeight = useMemo(() => screenHeight - bottomTabBarHeight, [screenHeight, bottomTabBarHeight]);

  const getAnswer = async (questionId: number): Promise<Answer> => {
    const response = await fetch(
      `https://cross-platform.rp.devfactory.com/reveal?id=${questionId}`,
    );
    return await response.json();
  };

  const getQuestion = () => {
    fetch('https://cross-platform.rp.devfactory.com/for_you')
      .then(response => response.json())
      .then((question: MultipleChoiceQuestion) => {
        getAnswer(question.id).then(answer => {
          setAnswers([...answers, answer]);
          setQuestions([...questions, question]);
        });
      })
      .catch(err => console.error(err));
  };

  useEffect(() => {
    setInterval(() => setTimer(timer - 1), 60000);
  }, []);

  useEffect(() => {
    if (questions.length === 0 || questions.length === 1) getQuestion();
  }, [questions]);

  return (
    <SafeAreaView style={[styles.container, { height: useableHeight }]}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Topbar timer={timer} />
      <Carousel
        data={questions}
        renderItem={({item, index}) => (
          <View style={{height: useableHeight}}>
            <Question
              mcq={item}
              correctAnswers={answers[index].correct_options}
              timer={timer}
              selectOption={selectedOption => {
                let allQuestions = [...questions];
                allQuestions[index].selectedOption = selectedOption;
                setQuestions(allQuestions);
              }}
            />
          </View>
        )}
        sliderHeight={useableHeight}
        itemHeight={useableHeight}
        vertical={true}
        onBeforeSnapToItem={index => {
          if (index === questions.length - 1) {
            getQuestion();
          }
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  topBar: {
    flexDirection: 'row',
    marginTop: 52,
    justifyContent: 'space-around',
    color: 'white',
    height: 31,
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