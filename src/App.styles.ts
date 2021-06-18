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

    > p {
        color: #ffffff;
    }

    .score: {
        color: #ffffff;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-family: 'Fredericka the Great', serif;
        color: white;
        font-size: 3rem;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: white;
        border: 1.5px solid red;
        border-radius: 5px;
        padding: 8px 20px;
    }
`