import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('Should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('Should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute('src', 'image.jpg');
    // expect screen.getByAltText('Olá mundo')
  });

  it('Should match snapshot', () => {
    const { container } = renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="image.jpg" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
