import { renderTheme } from '../../styles/render-theme';
import { ComponentName } from '.';
import { screen } from '@testing-library/react';

describe('<ComponentName />', () => {
  it('should render a text', () => {
    const { debug } = renderTheme(<ComponentName>children</ComponentName>);
    debug();
    console.log('screen', screen);
  });
});
