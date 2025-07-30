import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import { Modal } from '../../Modal';
import { ModalHeader, type ModalHeaderProps } from './ModalHeader';

const meta = {
  title: 'Overlays/Modal/Modal.Header',
  component: ModalHeader
} satisfies Meta<ModalHeaderProps>;

export default meta;
type Story = StoryObj<ModalHeaderProps>;

export const Playground: Story = {
  render: (props) => (
    <Modal header={<ModalHeader {...props}>Header</ModalHeader>} trigger={<Button>Open</Button>}>
      <div style={{ height: 100 }} />
    </Modal>
  )
};
