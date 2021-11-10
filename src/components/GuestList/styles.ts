import styled from 'styled-components';

export const GuestsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    padding-top: 3rem;
    
    gap: var(--gap);

    li {
        list-style-type: none;
        padding: 1rem;
        border: 1px solid var(--primary-color);
        border-radius: 1rem;

        &:hover {
            background: var(--primary-color);
        }
    }
`
