import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, color } from '@storybook/addon-knobs';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as ComponentMeta<typeof Main>;

export const Basic = () => (
  <Main background={color('backgroundColor', 'green')} />
);
