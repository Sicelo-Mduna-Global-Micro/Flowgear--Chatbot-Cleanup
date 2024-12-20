import React, {useState} from "react";
import McqToolbar from "./mcqToolbar";
import McqBody from "./mcqBody";
import McqBodyScoreCalculator from "./mcqBodyScoreCalculator";
import McqToolBarQuestionNavigator from "./mcqToolBarQuestionNavigator";
import { questions } from "./mcqBodyQuestions";

interface McqNavBarTabProps {
  handleNavigationChange: (navTarget: string, routeParams?: {}) => void;
}


const McqNavBarTab: React.FunctionComponent<McqNavBarTabProps> = ({ handleNavigationChange }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(
    new Array(questions.length).fill(null));
  const [showScore, setShowScore] = useState(false);

  const passPercentage = 60;

  const getQuizScore = (): number => {
    return selectedAnswers.reduce((acc, answer, index) => {
      if (answer === questions[index].correctAnswer) return acc + 1;
      return acc;
    }, 0);
  };

  const checkIfPassed = (): boolean => {
    const score = getQuizScore();
    return (score / questions.length) * 100 >= passPercentage;
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers(new Array(questions.length).fill(null));
    setShowScore(false);
  };


  const restartQuiz = () => {
    resetQuiz();
  };

  const handleBlockClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

    return (
      <div className="invoices-due-container">
        <McqToolbar />
        <div
          className="app-contentarea"
          style={{ width: "auto" }}
          id="content-area"
        >
          <div className="container-fluid">
            <div className="mcq-questions-container">
              {showScore ? (
                <McqBodyScoreCalculator
                  calculateScore={getQuizScore}
                  isPassed={checkIfPassed}
                  handleRetake={restartQuiz}
                />) 
                : 
                (
                <McqBody
                  questions={questions}
                  currentQuestionIndex={currentQuestionIndex}
                  setCurrentQuestionIndex={setCurrentQuestionIndex}
                  selectedAnswers={selectedAnswers}
                  setSelectedAnswers={setSelectedAnswers}
                  onSubmitQuiz={() => setShowScore(true)}
                />
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }

export default McqNavBarTab;
