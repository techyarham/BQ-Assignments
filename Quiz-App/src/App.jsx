import { useState, useRef, useEffect } from "react";
import Options from "./components/options";

function App() {
  const [mcqs, setMcqs] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false); // show feedback after clicking next

  const timeoutRef = useRef(null);

  async function getQuestions() {
    // clear any pending timeout if user restarts mid-feedback
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    const data = await fetch(
      "https://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple"
    );
    const question = await data.json();
    setMcqs(question.results);
    setQuizStarted(true);
    setScore(0);
    setCurrentQuestionIndex(0);
    setSelectedAnswer("");
    setShowResult(false);
  }

  function handleAnswer(answer) {
    // allow selection only when not showing result
    if (showResult) return;
    setSelectedAnswer(answer);
  }

  function nextQuestion() {
    if (!selectedAnswer || showResult) return;

    setShowResult(true); 

    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
     
      if (selectedAnswer === mcqs[currentQuestionIndex].correct_answer) {
        setScore((prev) => prev + 10);
      }

      if (currentQuestionIndex < mcqs.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedAnswer("");
        setShowResult(false);
      } else {
        // quiz end
        setQuizStarted(false);
        setShowResult(false);
        setSelectedAnswer("");
      }

      timeoutRef.current = null;
    }, 900);
  }

 
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Ultimate Quiz</h1>

      {!quizStarted && mcqs.length === 0 && (
        <button className="start-btn" onClick={getQuestions}>
          Start Quiz
        </button>
      )}

      {mcqs.length > 0 && quizStarted && (
        <div className="quiz-card">
          <div className="quiz-header">
            <h3>
              Question {currentQuestionIndex + 1} of {mcqs.length}
            </h3>
            <h3>Score: {score}</h3>
          </div>

          <h2
            className="quiz-question"
            dangerouslySetInnerHTML={{
              __html: mcqs[currentQuestionIndex].question
            }}
          />

          <Options
            correctAnswer={mcqs[currentQuestionIndex].correct_answer}
            incorrectAnswers={mcqs[currentQuestionIndex].incorrect_answers}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
            showResult={showResult}
          />

          <button
            className="next-btn"
            onClick={nextQuestion}
            
            disabled={!selectedAnswer || showResult}
          >
            Next
          </button>
        </div>
      )}

      {!quizStarted && mcqs.length > 0 && (
        <div className="result-card">
          <h2>Quiz Finished!</h2>
           {score <= 20 &&(
            <>
            <video src="https://i.imgflip.com/8gg6cb.mp4" height={300}width={300} loop autoPlay></video> 
            </>
          )}
         {score > 20 && score <= 40 &&(
            <>
            <video src="https://i.imgflip.com/5i4kyq.mp4" height={300}width={300} loop autoPlay></video> 
            </>
          )} 
           {score >= 50 && score <= 60  &&(
            <>
            <video src="https://i.imgflip.com/66o1m8.mp4" height={300}width={300} loop autoPlay></video> 
            </>
          )}
          {score >= 70 && score <= 80 &&(
            <>
            <video src="https://i.imgflip.com/3eet37.mp4" height={300}width={300} loop autoPlay></video> 
            </>
          )}
          {score >= 90 && (
            <>
            <video src="https://i.imgflip.com/6rtnkk.mp4" height={300}width={300} loop autoPlay></video> 
            </>
          )}
          <p>
            Your final score: {score} / {mcqs.length * 10}
          </p>
          <button
            className="start-btn"
            onClick={()=>{
              setMcqs([]);
              setQuizStarted(false);
              setScore(0);
              setCurrentQuestionIndex(0);
              setSelectedAnswer("");
              setShowResult(false);
            }}
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;