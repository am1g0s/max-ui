import type { Meta, StoryObj } from '@storybook/react';

import { Steps, type StepsProps } from './Steps';

const meta = {
  title: 'Blocks/Steps',
  component: Steps,
  args: {
    count: 10,
    progress: 5
  }
} satisfies Meta<StepsProps>;

export default meta;
type Story = StoryObj<StepsProps>;

export const Playground: Story = {
  render: ({ ...args }) => <Steps {...args} />
};
