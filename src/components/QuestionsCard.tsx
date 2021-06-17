import react from "react";

type questionProps = {
    question: string;
    systemAnswers: string[];
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
    callback: any;
}

const Questioncard: React.FC<questionProps> = ({
    question, 
    systemAnswers, 
    userAnswer,
    questionNumber,
    totalQuestions,
    callback
}) => (
    <div>
        <p className="number">
            Question: {questionNumber} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{__html: question}} />
        <div>
            {systemAnswers.map(answer => (
                <div key={answer}>
                    <button disabled={userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{__html: answer}} />
                    </button>
                </div>
            ))}
        </div>
    </div>
);

export default Questioncard;