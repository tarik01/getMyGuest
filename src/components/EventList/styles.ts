import styled from 'styled-components';

export const List = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
    padding-top: 3rem;
    gap: var(--gap);
    width: 100%;

    li {
        list-style: none;
        border: 1px solid var(--primary-color);
        border-radius: 1rem;
        
        &:hover {
            background: var(--primary-color);
        }
    }
`