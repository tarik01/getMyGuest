import styled from "styled-components";

export const Header = styled.div`
    text-align: center;
    padding: 1rem;

    .guest-bar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        input[type="search"] {
            width: 100%;
            border: none;
            height: 4rem;
            border-radius: 0.5rem;
            text-align: right;
            font-size: 1.5rem;
            padding-right: 1rem;
        }

        img {
            cursor: pointer;
        }
    }
`