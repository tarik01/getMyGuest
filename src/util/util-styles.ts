import styled from 'styled-components';

export const HalfCenter = styled.div`
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
