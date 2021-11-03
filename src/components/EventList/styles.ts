import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    padding-top: 3rem;
    gap: 30px;
    width: 100%;

    @media (max-width: 485px) {
        grid-template-columns: repeat(auto-fill, 1fr);
    }
`