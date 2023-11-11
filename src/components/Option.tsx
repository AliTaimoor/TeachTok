import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MCQ_Option} from '../types';

type OptionProps = {
  option: MCQ_Option;
  onSelect: () => void;
  isCorrect: boolean;
  isSelected: boolean;
  greenOverride: boolean
};

export default function Option({
  option,
  onSelect,
  isCorrect,
  isSelected,
  greenOverride
}: OptionProps): JSX.Element {

  let backgroundColor = "rgba(255, 255, 255, 0.5)";

  if(isCorrect && isSelected)
    backgroundColor = "rgba(40, 177, 143, 0.5)";
  else if(!isCorrect && isSelected)
    backgroundColor = "rgba(220, 95, 95, 0.5)";
  else if(greenOverride) 
    backgroundColor = "rgba(40, 177, 143, 0.5)";

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[styles.option, {backgroundColor: backgroundColor}]}
      onPress={() => {
        onSelect();
      }}
    >
      <Text style={styles.optionText}>{option.answer}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    gap: 10,
    minHeight: 52,
  },
  optionText: {
    fontSize: 17,
    fontWeight: '500',
    color: 'white',
    textShadowRadius: 10,
    textShadowColor: 'black',
  },
});
