export interface OptionProps {
  item: string;
  value: string;
}

export interface ResultQuestionProps {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [];
}
