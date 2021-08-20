import { Menu } from '.';
import mock from '../NavLink/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: mock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <Menu {...args} />
    </div>
  );
};
