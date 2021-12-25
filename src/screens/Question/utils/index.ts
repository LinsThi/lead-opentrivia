import type { ResultQuestionProps } from '~/dtos/arrayoption';

function shuffleArray(inputArray: any[]) {
  inputArray.sort(() => Math.random() - 0.5);
  return inputArray;
}

export const generateOptions = (
  questionListQuiz: ResultQuestionProps[],
  numberQuestion: number,
) => {
  let optionsCurrentQuestion = [];
  const optionsCurrentQuestionFormatted = [];
  const itemOption = ['a', 'b', 'c', 'd'];

  questionListQuiz[numberQuestion].incorrect_answers.map(option => {
    return optionsCurrentQuestion.push(option);
  });

  optionsCurrentQuestion.push(questionListQuiz[numberQuestion].correct_answer);

  for (let i = 0; i < 10; i++) {
    optionsCurrentQuestion = shuffleArray(optionsCurrentQuestion);
  }

  for (let i = 0; i < optionsCurrentQuestion.length; i++) {
    const option = {
      item: itemOption[i],
      value: optionsCurrentQuestion[i],
    };

    optionsCurrentQuestionFormatted.push(option);
  }

  return optionsCurrentQuestionFormatted;
};

export const verifyQuestionSequence = (
  sequenceQuestion: number,
  difficulty: string,
) => {
  const difficultyQuizz = ['easy', 'medium', 'hard'];
  const difficultyPositionArray = difficultyQuizz.indexOf(difficulty);

  if (sequenceQuestion === 3) {
    if (difficultyPositionArray === 2) {
      return difficultyQuizz[difficultyPositionArray];
    }
    return difficultyQuizz[difficultyPositionArray + 1];
  }
  if (difficultyPositionArray === 0) {
    return difficultyQuizz[difficultyPositionArray];
  }
  return difficultyQuizz[difficultyPositionArray - 1];
};
