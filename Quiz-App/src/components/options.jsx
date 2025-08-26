import React, { useMemo } from "react";
import "../App.css";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const Options = ({
  incorrectAnswers,
  correctAnswer,
  onAnswer,
  selectedAnswer,
  showResult
}) => {
  const allOptions = useMemo(() => {
    const list = [...(incorrectAnswers || []), correctAnswer];
    return shuffleArray(list);
  }, [incorrectAnswers, correctAnswer]);

  return (
    <div className="options-grid" role="list">
      {allOptions.map((option) => {
        const key = option;

        let btnClass = "option-btn";

        if (showResult) {
          if (option === correctAnswer) {
            btnClass += " correct"; 
          } else if (
            option === selectedAnswer &&
            selectedAnswer !== correctAnswer
          ) {
            btnClass += " wrong"; 
          } else {
            btnClass += " disabled"; 
          }
        } else if (option === selectedAnswer) {
          btnClass += " selected"; 
        }

        return (
          <button
            key={key}
            className={btnClass}
            onClick={() => onAnswer(option)}
            disabled={showResult}
      
            dangerouslySetInnerHTML={{ __html: option }}
            aria-pressed={option === selectedAnswer}
            role="listitem"
          />
        );
      })}
    </div>
  );
};

export default Options;