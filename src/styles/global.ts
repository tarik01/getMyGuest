import { createGlobalStyle } from 'styled-components';
import BackgroundImg from '../assets/images/background.svg';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
:root{
    --primary-color: #0A1128;
    --white-color: #ffffff;
    --light-gray-color: #eeeeee;
    --secondary-color: #F3F7EF;
    --gap: 3rem;
}
html{
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body{
    font-family: sans-serif;
    background: #dfca94;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat
}
#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    border-radius: 20px;
}
`