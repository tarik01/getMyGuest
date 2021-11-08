import styled from 'styled-components';

export const Container = styled.li`

    list-style: none;
    border: 1px solid var(--primary-color);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    width: 100%;
    text-align: center;
    justify-content: space-between;
    transition: all 0.2s;
    

    img {
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

        img {
            cursor: pointer;
            max-width: 4rem;
            max-height: 4rem;
        }
        
    }
    
    .picture {
        max-width: 12.5rem;
    }

    .informations{
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &:hover {
        background: var(--primary-color);
    }
`