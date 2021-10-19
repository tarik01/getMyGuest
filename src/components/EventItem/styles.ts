import styled from 'styled-components';

export const Container = styled.li`

    list-style: none;
    background: #f5f5f5;
    
    &:hover{
        transform: scale(1.05);
        
    }

    img {
        display: block;
        margin: 0 auto;
        width: 100%;
        max-width: 270px;
        max-height: 176px;
    }
    p {
        font-size: 1rem;
        padding: 1rem;
    }

    .action-buttons{
        margin: 0 auto;
        max-width: 270px;
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