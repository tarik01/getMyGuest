import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(26rem, 1fr));
  padding-top: 3rem;

  gap: var(--gap);

  & li {
    position: relative;
    list-style-type: none;
    border: 1px solid var(--primary-color);
    border-radius: 1rem;

    &:hover {
      background: var(--primary-color);
    }

    .remove-from-list {
      position: absolute;
      float: right;
      top: 1rem;
      right: 1rem;
    }
  }
`;
