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
    --yellow: yellow;
    --gap: 3rem;

    /* font-size */
    --small: 1.2rem;
    --default: 1.6rem;
    --medium: 2rem;
    --big: 2.4rem;

    /* icons size */
    --small-icon: 1.2rem;
    --medium-icon: 1.5rem;
    --big-icon: 2.2rem;

    --border-radius-default: 2rem;

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
    background-size: 100%;
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

button{
    cursor: pointer;
}

a {
    text-decoration: none;
    color: #000;
}

#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    border-radius: 20px;
}

img:hover {
    cursor: pointer;
}

.rounded-circle {
    border-radius: 50%;
}

`