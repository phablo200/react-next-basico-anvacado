import { SectionBackground } from '.';
import { SectionContainer } from '../SectionContainer';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <SectionContainer>
        <div>
          <h1>SectionContainer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero ut ipsam sint eum reiciendis rem quod.
            Temporibus eum adipisci culpa molestiae, architecto odio, cumque cupiditate exercitationem quos, minus iure.
          </p>
        </div>
      </SectionContainer>
    ),
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <SectionBackground {...args} />
    </div>
  );
};
