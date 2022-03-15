import styled from 'styled-components';

export const PartyItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  justify-content: center;

  .picture img {
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    padding: 1rem;
  }
  h2 {
    text-align: center;
    font-size: 2rem;
    text-transform: capitalize;
  }
  p {
    font-size: var(--small);
  }

  .action-buttons {
    height: max-content;
    margin-top: 0.5rem;

    img {
      cursor: pointer;
      width: var(--medium-icon);
      height: var(--medium-icon);
    }

    a:not(:last-child) {
      margin-right: 1rem;
    }
  }

  .picture {
    max-width: 12.5rem;
  }

  .informations {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
