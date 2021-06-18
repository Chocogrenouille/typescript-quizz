import react from "react";
import {AnswerObject} from '../App';
import {ButtonWrapper, QuestionWrapper} from './QuestionCard.styles'

type questionProps = {
    question: string;
    systemAnswers: string[];
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuestions: number;
    callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Questioncard: React.FC<questionProps> = ({
    question, 
    systemAnswers, 
    userAnswer,
    questionNumber,
    totalQuestions,
    callback
}) => (
    <QuestionWrapper>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {systemAnswers.map(answer => (
                <ButtonWrapper correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} key={answer}>
                    <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </QuestionWrapper>
);

export default Questioncard;