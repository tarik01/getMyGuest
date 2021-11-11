import styled from 'styled-components';

export const MyAccountContainer = styled.div`
    display: flex;
    align-self: auto;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    padding: 2rem;
    flex-wrap: wrap;

    div {
        min-height: 50%;
    }
    .informations {
        text-align: center;
        p {
            font-size: 1.6rem;
        }
        span {
            color: blue;
            cursor: pointer;
        }
    }

    .picture img {
        border-radius: 50%;
    }

    
`