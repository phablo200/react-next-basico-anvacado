import styled, { css } from 'styled-components';

export const Container = styled.nav`
  ${(props) => css`
    display: flex;
    flex-flow: row wrap;
    @media ${props.theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
