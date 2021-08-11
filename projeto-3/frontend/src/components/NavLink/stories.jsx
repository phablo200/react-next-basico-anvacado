import { NavLink } from '.';
import links from './mock';

export default {
  title: 'NavLink',
  component: NavLink,
  args: {
    links,
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <NavLink {...args} />
    </div>
  );
};
