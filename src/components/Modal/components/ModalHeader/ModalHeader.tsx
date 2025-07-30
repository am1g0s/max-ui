import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import styles from './ModalHeader.module.scss';

export interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
  before?: ReactNode
  after?: ReactNode
}

export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(({ before, after, className, children, ...props }, ref) => (
  <header ref={ref} className={clsx(styles.ModalHeader, className)} {...props}>
    <div className={styles.ModalHeader__before}>{before}</div>
    <div className={styles.ModalHeader__children}>{children}</div>
    <div className={styles.ModalHeader__after}>{after}</div>
  </header>
));

ModalHeader.displayName = 'ModalHeader';
