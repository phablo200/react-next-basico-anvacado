import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quae velit distinctio labore ducimus illum? Eligendi corporis libero itaque repudiandae voluptates, quaerat dolores. Nihil minus quis recusandae labore quam porro?',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
