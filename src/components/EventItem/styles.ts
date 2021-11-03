import styled from 'styled-components';

export const Container = styled.li`

    list-style: none;
    border: 1px solid var(--primary-color);
    border-radius: 0 0 10px 10px;

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 100vw;
    }
    h2 {
        text-align: center;
        font-size: 2rem;
        padding: 1rem;
        text-transform: capitalize;
    }

    .action-buttons{
        margin: 0 auto 1rem;
        max-width: 100vw;
        padding: 0 1rem 2rem 1rem;

        img {
            cursor: pointer;
            width: 2.5rem;
            height: 2.5rem;
            float: left;

            &:last-of-type {
                float: right;
            }
        }
        
    }
`