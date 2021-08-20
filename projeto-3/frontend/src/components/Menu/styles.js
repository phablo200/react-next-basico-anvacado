import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: red;
    border-bottom: ${props.theme.colors.mediumGray};
  `}
`;

export const Menu = styled.div`
  ${() => css``}
`;

export const Button = styled.div`
  ${() => css``}
`;
