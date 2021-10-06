import styled from 'styled-components';

export const MenuList = styled.nav`
    display: flex;
   justify-content: center;

    ul{
        padding: 0px;
        margin: 0px;
        list-style-type: none;

        li {
            display: inline;
            padding: 15px;
            border-radius: 20px;

            transition: background 0.2s;

            &:hover {
                background: #fff;
            }
        }
    }
    /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    font-size: 1.2rem;
    margin-top: 1.2rem; */
`