import styled from 'styled-components';

export const ImageLoginContainer = styled.div`
  max-width: 32rem;
  width: 100%;
  & img {
    width: 100%;
    height: 100%;
    max-width: 30rem;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
