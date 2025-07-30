import type { Meta, StoryObj } from '@storybook/react';
import { useRef, useState } from 'react';

import { OverlayContainer } from '../../../.storybook/components/OverlayContainer';
import { useColorScheme } from '../../hooks';
import { Button } from '../Button';
import { Tooltip, type TooltipProps } from './Tooltip';

const meta = {
  title: 'Overlays/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<TooltipProps>;

export default meta;
type Story = StoryObj<TooltipProps>;

export const Playground: Story = {
  args: {
    mode: 'light'
  },
  render: (args) => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const [shown, setShown] = useState(true);

    return (
      <>
        <Button ref={ref} onClick={() => { setShown(!shown); }} style={{ width: 100 }}>
          {shown ? 'Hide' : 'Show'}
        </Button>
        {shown && (
          <Tooltip {...args} targetRef={ref}>
            Hold to record audio. Tap to switch to video.
          </Tooltip>
        )}
      </>
    );
  },
  decorators: [
    (StoryComponent, context) => {
      const colorScheme = useColorScheme();

      return (
        <OverlayContainer
          style={{ width: 280, height: 300 }}
          appearance={context.args.mode === 'dark' || colorScheme === 'dark' ? 'dark' : 'light'}
        >
          <StoryComponent />
        </OverlayContainer>
      );
    }
  ]
};
