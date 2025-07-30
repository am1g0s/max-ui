import { Drawer } from '@xelene/vaul-with-scroll-fix';
import { clsx } from 'clsx';
import {
  forwardRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type ReactNode,
  type RefAttributes
} from 'react';

import { ModalClose } from './components/ModalClose/ModalClose';
import { ModalHeader } from './components/ModalHeader/ModalHeader';
import { ModalOverlay } from './components/ModalOverlay/ModalOverlay';
import styles from './Modal.module.scss';

export interface ModalProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAnimationEnd'> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  header?: ReactNode
  overlayComponent?: ReactNode
  trigger?: ReactNode
  nested?: boolean
  closeThreshold?: number
  scrollLockTimeout?: number
  modal?: boolean
  preventScrollRestoration?: boolean
  snapPoints?: Array<number | string>
  fadeFromIndex?: never
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
  fadeFromIndex,
  modal,
  preventScrollRestoration,
  dismissible,
  ...restProps
}, ref) => {
  const Component = nested ? Drawer.NestedRoot : Drawer.Root;

  return (
    <Component
      open={open}
      onOpenChange={onOpenChange}
      closeThreshold={closeThreshold}
      scrollLockTimeout={scrollLockTimeout}
      snapPoints={snapPoints}
      fadeFromIndex={fadeFromIndex}
      modal={modal}
      preventScrollRestoration={preventScrollRestoration}
      dismissible={dismissible}
    >
      {trigger && <Drawer.Trigger asChild>{trigger}</Drawer.Trigger>}
      <Drawer.Portal>
        {overlayComponent}
        <Drawer.Content ref={ref} className={clsx(styles.Modal, className)} {...restProps}>
          {header}
          <div className={styles.Modal__body}>
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Component>
  );
}) as ModalWithComponents;

Modal.Header = ModalHeader;
Modal.Overlay = ModalOverlay;
Modal.Close = ModalClose;

Modal.displayName = 'Modal';
