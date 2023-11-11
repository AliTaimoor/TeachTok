export type MCQ_Option = {
  id: string,
  answer: string
};

export type User = {
  name: string,
  avatar: string
}

export type MultipleChoiceQuestion = {
  type: string,
  id: number,
  playlist: string,
  description: string,
  image: string,
  question: string,
  options: MCQ_Option[],
  user: User,
  selectedOption: MCQ_Option | null
}

export type Answer = {
  id: number,
  correct_options: MCQ_Option[]
}