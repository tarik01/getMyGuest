import styled from 'styled-components';

export const Container = styled.li`

    list-style: none;
    border: 1px solid var(--secondary-color);
    border-radius: 0 0 10px 10px;

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 30rem;
        max-height: 17.6rem;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        padding: 1rem;
    }

    .action-buttons{
        margin: 0 auto;
        max-width: 30rem;
        img {
            cursor: pointer;
            width: 2rem;
            height: 2rem;
            float: left;

            &:last-of-type {
                float: right;
            }

            &:hover{
                transform: scale(1.2);
                filter: drop-shadow(0 0 0.80rem crimson);
                
            }
        }
        
    }
`