import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    @media (max-width: 1080px){
        font-size:93.75%;
    }

    @media (max-width: 720px){
        font-size: 87.5%;
    }
}
body{
    background: #fff;
    font-family: sans-serif;
}
#root {
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
    border-radius: 20px;
    background: #e6e6e6;
}
`