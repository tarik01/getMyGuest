import styled from 'styled-components';

export const TooltipContainer = styled.div`
  &[data-tool-tip] {
    position: relative;
  }
  &[data-tool-tip]:hover::before {
    visibility: visible;
    opacity: 1;
  }
  &[data-tool-tip]::before {
    text-align: center;
    content: attr(data-tool-tip);
    visibility: hidden;
    opacity: 0;
    min-width: 100%;
    width: max-content;
    height: max-content;
    position: absolute;
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
    background-color: #5a5a5a;
    color: white;
    border-radius: 0.4rem;
    font-size: 1rem;
    font-weight: 500;
    white-space: nowrap;
    transition: opacity ease-out 150ms, bottom ease-out 150ms;
  }
  &[data-position='top']::before {
    bottom: 100%;
  }
  &[data-position='right']::before {
    left: 100%;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
  &[data-position='bottom']::before {
    top: 100%;
  }
  &[data-position='left']::before {
    right: 100%;
    top: 0;
    bottom: 0;
    margin: auto 0;
  }
`;
