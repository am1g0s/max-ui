import { Drawer } from '@xelene/vaul-with-scroll-fix';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef } from 'react';

import styles from './ModalOverlay.module.scss';

export interface ModalOverlayProps extends ComponentProps<'div'> {}

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(({ className, ...props }, ref) => (
  <Drawer.Overlay ref={ref} className={clsx(styles.ModalOverlay, className)} {...props} />
));

ModalOverlay.displayName = 'ModalOverlay';
