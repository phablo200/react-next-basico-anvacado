import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>SectionContainer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero ut ipsam sint eum reiciendis rem quod.
          Temporibus eum adipisci culpa molestiae, architecto odio, cumque cupiditate exercitationem quos, minus iure.
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <SectionContainer {...args} />
    </div>
  );
};
