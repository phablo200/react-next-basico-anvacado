import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    text: 'LogoLink',
    srcImg: 'favicon.ico',
    link: 'http://localhost',
  },
};

export const onlyImage = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <LogoLink {...args} />
    </div>
  );
};

export const onlyText = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

onlyText.args = {
  srcImg: '',
};
