import React, {useState} from 'react';
import { fetchQuizQuestions } from './components/API';
import QuestionCard from './components/QuestionsCard';
import { Difficulty, completeQuestionsInfo } from './components/API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const setTotalQuestions = 10;

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<completeQuestionsInfo[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuizz = async () => {
    setLoading(true);
    setGameOver(false);

      const newQuestions = await fetchQuizQuestions(
        setTotalQuestions,
        Difficulty.EASY
      )

      setQuestions(newQuestions);
      setScore(0);
      setUserAnswers([]);
      setNumber(0);
      setLoading(false);
  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore(prevState => prevState+1)
      }
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers((prevState) => [...prevState, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number+1;
    if (nextQuestion === setTotalQuestions){
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <div className="App">
      <h1>Trivia Quizz</h1>
      {gameOver || userAnswers.length === setTotalQuestions ? (
         <button className="start" onClick={startQuizz}>Start</button>
      ) : null}
      {!gameOver ?  <p className="score">Score:</p> : null}
      {loading && <p>Loading Questions ...</p>}
      {!loading && !gameOver && (
        <QuestionCard 
        questionNumber = {number+1}
        totalQuestions = {setTotalQuestions}
        question = {questions[number].question}  
        systemAnswers = {questions[number].answers}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
        callback = {checkAnswer}
        />
      )}
      {!gameOver && !loading && userAnswers.length === number+1 && number !== setTotalQuestions-1 ? (
        <button className="next" onClick={nextQuestion}>Next Question</button>
      ) : null}
    </div>
  );
}

export default App;
