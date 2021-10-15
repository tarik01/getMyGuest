import styled from 'styled-components';

export const MenuList = styled.nav`
    display: flex;
    justify-content: center;

    ul{
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        align-items: center;
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;

        li {
            display: inline-block;
            padding: 15px;
            border-radius: 15px;
            transition: background 0.2s;
            background: #fff;
            cursor: pointer;
            vertical-align: middle;
            font-size: 0.8rem;
            text-align: center;

            &:hover {
                background: #ccc;
            }

            img {
                width: 64px;
                height: 64px;
                display: block;
                float: center;
                margin: 0 auto;
                padding: 0.5rem;
            }
        }
    }
`