import styled from 'styled-components';

export const Container = styled.div` 
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    justify-content: center;   
  
    .picture img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        padding: 1rem;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        text-transform: capitalize;
    }
    p {
        font-size: 1.2rem;
    }

    .action-buttons{   
        height: max-content;
        margin-top: 0.5rem;

        img {
            cursor: pointer;
            width: 1.5rem;
            height: 1.5rem;
        }

        a:not(:last-child) {
            margin-right: 1rem;
        }
        
    }
    
    .picture {
        max-width: 12.5rem;
    }

    .informations{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`