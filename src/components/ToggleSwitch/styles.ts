import styled from "styled-components"; 

export const ToogleContainer = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e8f5f7;
    height: 1.5rem;
    width: 1.5rem;
    
    input[type="checkbox"] {
        width: 0;
        height: 0;
        visibility: hidden;
    }


    label {
        display: block;
        width: 5rem;
        height: 1.5rem;
        background: #477a85;
        border-radius: 1rem;
        position: relative;
        cursor: pointer;
        transition: 0.5s;
        box-shadow: 0 0 2rem #477a8550;

        &::after{
            content: "";
            width: 1.2rem;
            height: 1.2rem;
            background: #e8f5f7;
            position: absolute;
            border-radius: 0.7rem;
            top: 1.5rem;
            left: 1.5rem;
            transition: 0.5s;
        }

        &:active:after{
            width: 1.6rem;
        }
    }

    input[type="checkbox"]:checked + label {
        left: calc(100% - 1rem);
        transform: translateX(-100%);
        background: #243d42; ;
    }
`