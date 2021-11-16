import styled from 'styled-components';

export const MainPanel = styled.div`
    display: flex;
    align-self: auto;
    justify-content: center;
    align-items: center;
    gap: var(--gap);
    padding: 2rem;
    flex-wrap: wrap;
    font-size: 1.6rem;

    div {
        min-height: 50%;
    }
    
    .informations {
        text-align: center;
        span {
            color: blue;
            cursor: pointer;
        }
    }
`;

export const Container = styled.div`
    p {
        font-size: 1.6rem;
    }
`;

export const DescriptionPanel = styled.div`
    padding: 1rem;
    text-align: center;
    p {
        padding: 1rem;
    }
    background: var(--primary-color);
    border-radius: 2rem;
`;