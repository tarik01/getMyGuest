import styled from 'styled-components';

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    padding-top: 3rem;
    gap: var(--gap);
    width: 100%;
`