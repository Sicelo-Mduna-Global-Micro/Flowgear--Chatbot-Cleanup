
import React from "react";

interface Question {
  question: string;
  options: string[];
}

const McqBodyQuestionOptionsRendering: React.FC<{
  question: Question;
  selectedAnswer: number | undefined;
  onOptionChange: (index: number) => void;
}> = ({ question, selectedAnswer, onOptionChange }) => (
  <div className="question pl-sm-5 pt-2">
    <div className="py-2 h5">
      <button className="btn-modern question-btn">
        <b>{question.question}</b>
      </button>
    </div>
    <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
      {question.options.map((option, index) => (
        <label className="options" key={index}>
          {option}
          <input
            type="radio"
            name={`question-${index}`}
            checked={selectedAnswer === index}
            onChange={() => onOptionChange(index)}
          />
          <span className="checkmark"></span>
        </label>
      ))}
    </div>
  </div>
);

export default McqBodyQuestionOptionsRendering;
