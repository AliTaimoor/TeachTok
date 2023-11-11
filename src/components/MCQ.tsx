import {StyleSheet, Text, View} from 'react-native';
import Option from './Option';
import {MCQ_Option, MultipleChoiceQuestion} from '../types';

type MCQProps = {
  mcq: MultipleChoiceQuestion;
  correctAnswers: MCQ_Option[];
  select: (option: MCQ_Option) => void
};

export default function MCQ({mcq, correctAnswers, select}: MCQProps): JSX.Element {
  return (
    <View style={styles.question}>
      <Text style={styles.prompt}>{mcq.question}</Text>
      <View style={styles.options}>
        {mcq.options.map(option => {
          const isCorrect = correctAnswers.find(ans => ans.id === option.id) !== undefined;
          const isSelected = mcq.selectedOption !== undefined && mcq.selectedOption!.id === option.id;
          return (
            <Option
              key={option.id}
              option={option}
              greenOverride={mcq.selectedOption !== undefined && !isSelected && isCorrect}
              isCorrect={isCorrect}
              isSelected={isSelected}
              onSelect={() => {
                if(mcq.selectedOption !== undefined)
                  return;
                select(option)
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  question: {
    flex: 1,
    gap: 24,
    justifyContent: 'space-between',
  },
  prompt: {
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '500',
    borderRadius: 10,
    padding: 8,
    color: 'white',
  },
  options: {
    display: 'flex',
    gap: 8,
  },
});
