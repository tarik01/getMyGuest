import styled from "styled-components"; 

// Adapted from https://codepen.io/nghh/pen/abWKXEK

export const ToogleContainer = styled.div`
    --height: 2rem;
    --width: 4rem;
    --border: 0.15rem;
    --switch-color-checked: darkcyan;
    --switch-color-unchecked: lightgrey;
    --dot-color-checked: white;
    --dot-color-unchecked: white;

    label {
        display: block;
        position: relative;
        cursor: pointer;
        padding-left: calc(var(--width) + 1em);
        min-width: var(--width);
        min-height: var(--height);

        &::before,
        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            transition: 0.25s ease-in-out;
            box-sizing: border-box;
        }
        &::before {
            z-index: 1;
            background-color: var(--switch-color-unchecked);
            width: var(--width);
            height: var(--height);
            border-radius: calc(var(--height) * 0.5);
            box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.2);
        }

        /* Dot */
        &::after {
            z-index: 2;
            background-color: var(--dot-color-unchecked);
            height: calc(var(--height) - (var(--border) * 2));
            width: calc(var(--height) - (var(--border) * 2));
            transform: translate(var(--border), var(--border));
            border-radius: calc(var(--height) / 2);
        }

        &:active::after {
            width: calc(var(--height) * 1.2);
            max-width: calc(var(--height) * 2);
        }
    }

    input {
        width: 0;
        height: 0;
        visibility: hidden;
        display: none;

        &:checked + label {
            &::before {
                transition: 0.5s;
                background-color: var(--switch-color-checked);
            }
            &::after {
                transform: translate(
                    calc(var(--width) - 100% - var(--border)),
                    var(--border)
                );
                background-color: var(--dot-color-checked);
            }
        }
    }
`