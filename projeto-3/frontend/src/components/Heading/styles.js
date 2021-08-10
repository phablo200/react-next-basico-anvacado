import styled, { css } from 'styled-components';

const titleSize = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.small};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.huge};
    @media ${theme.media.lteMedium} {
      font-size: ${theme.font.sizes.xlarge};
    }
  `,
};

const titleCase = (uppercase) => css`
  text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${!colorDark ? theme.colors.white : theme.colors.primaryColor};
    ${titleSize[size](theme)};
    ${titleCase(uppercase)};
  `}
`;
