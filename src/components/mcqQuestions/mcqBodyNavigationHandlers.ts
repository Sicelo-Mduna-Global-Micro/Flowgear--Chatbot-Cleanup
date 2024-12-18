// navigationHandlers for the "Next" and "Previous" buttons in the mcqBody
export const goToNextQuestion = (
  currentQuestionIndex: number,
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>,
  totalQuestions: number
) => {
  if (currentQuestionIndex < totalQuestions - 1) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }
};

export const goToPreviousQuestion = (
  currentQuestionIndex: number,
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>
) => {
  if (currentQuestionIndex > 0) {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  }
};
