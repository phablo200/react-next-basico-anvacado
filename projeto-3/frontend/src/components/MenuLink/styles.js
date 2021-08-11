import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${(props) => css`
    display: block;
    text-decoration: none;
    font-size: ${props.theme.font.sizes.small};
    padding: ${props.theme.spacings.small};
    color: ${props.theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0.75rem;
      width: 0;
      height: 0.2rem;
      background: ${props.theme.colors.secondaryColor};
      transition: all 300ms ease-in-out;
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
