import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  args: {
    background: '#06092b',
  },
  argTypes: {
    background: { control: 'color' },
  },
} as ComponentMeta<typeof Main>;

export const Basic: Story<{ background: string }> = (args: {
  background: string;
}) => <Main background={args.background} />;
