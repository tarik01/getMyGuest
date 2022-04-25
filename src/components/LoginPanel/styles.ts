import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 32rem;
  width: 100%;

  & form {
    display: flex;
    flex-direction: column;
  }

  & h1 {
    font-size: 3.5rem;
  }

  & input[type='text'],
  input[type='password'] {
    font-size: 1.6rem;
    height: 4rem;
    text-align: left;
    border: none;
    width: 100%;
    margin-right: 0.2rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }

  & .buttons {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    justify-content: space-between;

    button > img,
    button > span {
      vertical-align: middle;
    }

    & button {
      width: 50%;
      height: 3.5rem;
      border-radius: 0.5rem;
      border: none;
      background-color: var(--secondary-color);
    }
    & button:hover {
      background-color: var(--light-gray-color);
    }
    & .registerButton {
      background: var(--yellow);
    }
  }
`;
