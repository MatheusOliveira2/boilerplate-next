import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    background: 'red',
  },
} as ComponentMeta<typeof Main>;

export const Basic = (args: { background: string }) => (
  <Main background={args.background} />
);
