import styled from "styled-components";

export const Container = styled.div`
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
        width: 4.5rem;
        margin-left: 0.5rem;
    }
`;