import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
    align-items: center;
    text-align: center; 

    .cover {
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
        margin-top: 0.5rem;

        img {
            cursor: pointer;
            width: 1.5rem;
            height: 1.5rem;           
        }
        a:not(:last-child) {
            margin-right: 0.6rem;
        }
        
    }

`