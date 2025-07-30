import {
  ModalClose,
  type ModalCloseProps,
  ModalHeader,
  type ModalHeaderProps,
  ModalOverlay,
  type ModalOverlayProps
} from './components';
import { Modal, type ModalProps } from './Modal';

const ModalNamespace = Object.assign(Modal, {
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Close: ModalClose
});

export { ModalNamespace as Modal };
export type {
  ModalCloseProps,
  ModalHeaderProps,
  ModalOverlayProps,
  ModalProps
};
