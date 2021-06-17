import React, {useState} from 'react';
import QuestionCard from './components/QuestionsCard';

function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [game, setGameOver] = useState(true);

  const setTotalQuestions = 10;

  const startQuizz = async () => {

  }

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>Trivia Quizz</h1>
      <button className="start" onClick={startQuizz}>Start</button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard 
        questionNumber = {number+1}
        totalQuestions = {setTotalQuestions}
        question = {questions[number].question}  
        
      />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>
  );
}

export default App;
