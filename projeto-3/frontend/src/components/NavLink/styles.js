import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${(props) => css`
    display: flex;
    flex-flow: row wrap;
    background: #fff;
    @media ${props.theme.media.lteMedium} {
      flex-flow: column wrap;
      align-content: center;
    }
  `}
`;
