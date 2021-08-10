import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto que quero testar...',
  },
  argsTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <Heading {...args} />;
export const Dark = (args) => <Heading {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Light.args = {
  children: 'Texto no light',
};

Dark.args = {
  children: 'Texto no dark',
  colorDark: false,
};
