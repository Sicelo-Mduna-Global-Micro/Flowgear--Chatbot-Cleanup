export const selectOption = (
  currentQuestionIndex: number,
  selectedAnswers: number[],
  setSelectedAnswers: React.Dispatch<React.SetStateAction<number[]>>,
  index: number
) => {
  const newAnswers = [...selectedAnswers];
  newAnswers[currentQuestionIndex] = index;
  setSelectedAnswers(newAnswers);
};
