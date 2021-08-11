import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLink } from '.';
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<MenuLink />', () => {
  it('Shoud render links', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('Should render with media query', () => {
    renderTheme(<NavLink links={mock} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('Should not render links', () => {
    renderTheme(<NavLink links={mock} />);
    //expect(screen.getAllByText(/link/i)).toHaveLength(0);
  });
});
