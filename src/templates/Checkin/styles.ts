import styled from "styled-components";

export const CheckinContainer = styled.div`

    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    flex-wrap: wrap;
    gap: var(--gap);

    section {
        width: 100%;
        max-width: 32rem;
        padding: 1rem;
    }

    .section {           
        border-radius: 1.5rem;
        border: 1px solid var(--primary-color);
    }

    .section-header {
        text-align: center;
        background: var(--primary-color);
        border-radius: 1.5rem 1.5rem 0 0;
    }

    .content-inside {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;

        img {
            max-width: 3rem;
        }

    }

    input[type="text"], button {
        font-size: 1.6rem;
        height: 4rem;
        text-align: center;
        border: none;
        width: 100%;
        margin-right: 0.2rem;
        border-radius: 0.5rem;
    }
    input[type="text"] {
        text-transform: uppercase;

        &::placeholder{
            text-transform: none;
        }
    }

    button:hover {
        background-color: var(--light-gray-color);
    }

    span {
        font-size: 1.6rem;
    }

    .confirm-container {
        padding-top: 1.5rem;

        button > img,
        button > span {
        vertical-align: middle;
        }
        
        img {
            max-width: 2rem;
        }
    }

    .selected {
        background: var(--primary-color);
        border-radius: 2rem;
        margin: 1rem 0;
        text-align: center;

        span {
            float: right;
            margin-top: -3rem;
            margin-right: 2rem;
        }
    }
    .change-hover{
        min-width: 30rem;
        min-height: 30rem;
    }

`