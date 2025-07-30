import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../Button';
import { Modal, ModalClose, type ModalCloseProps } from '../../Modal';

const meta = {
  title: 'Overlays/Modal/Modal.Close',
  component: ModalClose
} satisfies Meta<ModalCloseProps>;

export default meta;
type Story = StoryObj<ModalCloseProps>;

export const Playground: Story = {
  render: (props) => (
    <Modal trigger={<Button>Open</Button>}>
      <div style={{ padding: 16 }}>
        <Modal.Close {...props}>
          <Button size="small">Close</Button>
        </Modal.Close>
      </div>
    </Modal>
  )
};
