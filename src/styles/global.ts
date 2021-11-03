import { createGlobalStyle } from 'styled-components';
import BackgroundImg from '../assets/images/background.svg';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --primary-color: #dfca94;
    --white-color: #ffffff;
    --light-gray-color: #ccc;
    --secondary-color: #F3F7EF;
    --gap: 3rem;
}
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-family: 'Zen Kurenaido', sans-serif;
    background: var(--primary-color);
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-size: auto;
}

h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2rem;
}

h1, h2{
    font-family: 'Zen Kurenaido', sans-serif;
}

#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    border-radius: 20px;
}
@media (max-width: 484px) {

}


`