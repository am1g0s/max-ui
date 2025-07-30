import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button';
import { Modal, type ModalProps } from './Modal';

const meta = {
  title: 'Overlays/Modal',
  component: Modal,
  args: {
    header: <Modal.Header>Header</Modal.Header>,
    trigger: <Button>Open modal</Button>,
    children: <div style={{ padding: 16 }}>Modal content</div>
  }
} satisfies Meta<ModalProps>;

export default meta;

type Story = StoryObj<ModalProps>;

export const Playground: Story = {};

export const Controlled: Story = {
  args: {},
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <Modal
        {...args}
        open={open}
        onOpenChange={setOpen}
        trigger={<Button onClick={() => { setOpen(true); }}>Open modal</Button>}
      />
    );
  }
};
