import styled from 'styled-components';

export const MenuList = styled.nav`
    display: flex;
    justify-content: center;

    ul{
        padding: 0px;
        margin: 0px;
        list-style-type: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(11.5rem, 1fr));
        max-width: 80%;
        gap: var(--gap);

        li {
            display: inline-block;
            padding: 1.5rem;
            border-radius: 1.5rem;
            transition: background 0.2s;
            background: #fff;
            cursor: pointer;
            vertical-align: middle;
            font-size: 1.5rem;
            text-align: center;

            img {
                width: 6.4rem;
                height: 6.4rem;
                display: block;
                float: center;
                margin: 0 auto;
                padding: 0.5rem;
            }

            &.my-account {
                background: var(--yellow);
            }

            &:hover {
                background: var(--secondary-color);
            }
        }
    }
`