import { Drawer } from '@xelene/vaul-with-scroll-fix';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ForwardRefExoticComponent, type ReactNode, type RefAttributes } from 'react';

import styles from './Modal.module.scss';
import { ModalClose, ModalHeader, ModalOverlay } from './parts';

export interface ModalProps extends Omit<ComponentProps<'div'>, 'onAnimationEnd'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  header?: ReactNode
  overlayComponent?: ReactNode
  trigger?: ReactNode
  nested?: boolean
  closeThreshold?: number
  scrollLockTimeout?: number
  snapPoints?: Array<number | string>
  modal?: boolean
  preventScrollRestoration?: boolean
  dismissible?: boolean
}

type ModalWithComponents = ForwardRefExoticComponent<ModalProps & RefAttributes<HTMLDivElement>> & {
  Header: typeof ModalHeader
  Overlay: typeof ModalOverlay
  Close: typeof ModalClose
};

export const Modal = forwardRef<HTMLDivElement, ModalProps>(({
  overlayComponent = <ModalOverlay />,
  open,
  onOpenChange,
  header,
  className,
  children,
  nested,
  trigger,
  closeThreshold,
  scrollLockTimeout,
  snapPoints,
  modal,
  preventScrollRestoration,
  dismissible,
  ...restProps
}, ref) => {
  const Root = nested ? Drawer.NestedRoot : Drawer.Root;

  return (
    <Root
      open={open}
      onOpenChange={onOpenChange}
      closeThreshold={closeThreshold}
      scrollLockTimeout={scrollLockTimeout}
      snapPoints={snapPoints}
      modal={modal}
      preventScrollRestoration={preventScrollRestoration}
      dismissible={dismissible}
    >
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        {overlayComponent}
        <Drawer.Content ref={ref} className={clsx(styles.Modal, className)} {...restProps}>
          {header}
          <div className={styles.Modal__body}>{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Root>
  );
}) as ModalWithComponents;

Modal.Header = ModalHeader;
Modal.Overlay = ModalOverlay;
Modal.Close = ModalClose;

Modal.displayName = 'Modal';
