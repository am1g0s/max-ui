import { Modal } from './Modal';
import { ModalClose, ModalHeader, ModalOverlay } from './parts';

const ModalNamespace = Object.assign(Modal, {
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Close: ModalClose
});

export { ModalNamespace as Modal };
export type { ModalProps } from './Modal';
export type { ModalCloseProps, ModalHeaderProps, ModalOverlayProps } from './parts';
