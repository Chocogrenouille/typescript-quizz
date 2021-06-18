import styled, {createGlobalStyle} from 'styled-components';
import backgroundImage from './images/background.jpg';

export const AllStyles = createGlobalStyle`
    html{
        height: 100%;
    }

    body {
        background-image: url(${backgroundImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .score {
        color: white;
        font-family: 'Crushed', serif;
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    h1 {
        font-family: 'Crushed', serif;
        color: #ae0417;
        font-size: 5rem;
        text-align: center;
        margin: 1rem;
    }

    .start, .next {
        cursor: pointer;
        background: white;
        border: 2px solid #ae0417;
        border-radius: 5px;
        padding: 8px 20px;
    }
`