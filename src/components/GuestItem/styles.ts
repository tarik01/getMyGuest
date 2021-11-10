import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center; 

    img {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        padding: 1rem;
    }
    
    p {
        font-size: 1.2rem;
    }

    .action-buttons{   
        height: max-content;

        img {
            cursor: pointer;
            max-width: 3.5rem;
            max-height: 3.5rem;
        }
        
    }

`