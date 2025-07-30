import type { Meta, StoryObj } from '@storybook/react';

import { ModalOverlay, type ModalOverlayProps } from './ModalOverlay';

const meta = {
  title: 'Overlays/Modal/Modal.Overlay',
  component: ModalOverlay
} satisfies Meta<ModalOverlayProps>;

export default meta;
type Story = StoryObj<ModalOverlayProps>;

export const Playground: Story = {
  render: (props) => (
    <div style={{ height: 200, position: 'relative' }}>
      <ModalOverlay {...props} />
    </div>
  )
};
