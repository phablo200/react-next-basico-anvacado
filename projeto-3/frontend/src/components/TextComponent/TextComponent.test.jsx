import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    //const { debug } = renderTheme(<TextComponent>children</TextComponent>);
    //expect(screen.getByText('children').toBeInTheDocument());
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>children</TextComponent>);
    expect(container).toMatchSnapshot();
    // Para components pequenos...
    //expect(container.firstChild).toMatchInlineSnapshot();
  });
});
