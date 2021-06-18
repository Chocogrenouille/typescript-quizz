import styled from 'styled-components';

export const QuestionWrapper = styled.div`
    max-width: 1100px;
    background: #c6dad9;
    border: 2px solid #ae0417;
    border-radius: 5px;
    padding: 20px;
    text-align: center;
    margin-bottom: 1rem;
    p {
        font-size: 1rem,
    }
`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer:
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        padding: 10px;
        margin: 5px;
        border: 1px solid white;
        border-radius: 5px;
        color: black;
        background: ${({correct, userClicked}) => 
            correct ? 
            'linear-gradient(90deg, #cad55e, #4e601a)' 
            : !correct && userClicked
            ? 'linear-gradient(90deg, #e6804f, #af1a1a)' 
            : 'linear-gradient(90deg, #c6d9d9, #687f7f)' 
        }
    }
`