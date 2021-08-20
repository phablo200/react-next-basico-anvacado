import styled, { css } from 'styled-components';

const containerBackground = (theme) => css`
  ${console.log(theme)}
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${(props) => css`
    background: ${props.theme.colors.white};
    color: ${props.theme.colors.primaryColor};
    ${props.background && containerBackground(props.theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
