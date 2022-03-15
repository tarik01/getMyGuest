import styled from 'styled-components';

export const PartyInfoPanelContainer = styled.div`
  & p {
    font-size: var(--default);
  }

  .iframe {
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: var(--border-radius-default);
  }
`;

export const MainPanel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--gap);
  flex-wrap: wrap;
  font-size: var(--default);
  margin-bottom: 2rem;

  .informations {
    text-align: center;

    & span {
      color: blue;
      cursor: pointer;
    }
  }
`;

export const DescriptionPanel = styled.div`
  padding: 1rem;
  text-align: center;
  background: var(--primary-color);
  border-radius: 2rem;
  margin-top: 1rem;
  width: 100%;

  & p {
    padding: 1rem;
  }
  & h2 {
    margin-bottom: 1rem;
  }
`;
