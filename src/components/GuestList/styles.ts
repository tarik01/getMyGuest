import styled from 'styled-components';

export const GuestsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
    padding-top: 3rem;
    
    /* min-width: 50%; */
    gap: var(--gap);

    li {
        list-style-type: none;
        padding: 1rem;
        border: 1px solid var(--primary-color);
        border-radius: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        img {
            width: 12rem;
            height: 12rem;
            border-radius: 50%;
            padding: 1rem;
        }

        &:hover {
            background: var(--primary-color);
        }
        .action-buttons{
        height: max-content;

            img {
                cursor: pointer;
                max-width: 3.5rem;
                max-height: 3.5rem;
            }
            
        }
    }
`
