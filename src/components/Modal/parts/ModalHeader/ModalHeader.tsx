import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, type ReactNode } from 'react';

import { usePlatform } from '../../../../hooks';
import { Typography } from '../../../Typography';
import styles from './ModalHeader.module.scss';

export interface ModalHeaderProps extends ComponentProps<'header'> {
  before?: ReactNode
  after?: ReactNode
}

export const ModalHeader = forwardRef<HTMLElement, ModalHeaderProps>(({
  before,
  after,
  className,
  children,
  ...props
}, ref) => {
  const platform = usePlatform();

  return (
    <header ref={ref} className={clsx(styles.ModalHeader, className)} {...props}>
      <div className={styles.ModalHeader__before}>{before}</div>
      {platform === 'ios' && (
        <Typography.Title variant="medium-strong" className={styles.ModalHeader__children} asChild>
          <span>{children}</span>
        </Typography.Title>
      )}
      <div className={styles.ModalHeader__after}>{after}</div>
    </header>
  );
});

ModalHeader.displayName = 'ModalHeader';
