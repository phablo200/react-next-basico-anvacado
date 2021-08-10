import styled, { css } from 'styled-components';

export const Container = styled.p`
  ${(props) => css`
    font-size: ${props.theme.font.sizes.medium};
  `}
`;
