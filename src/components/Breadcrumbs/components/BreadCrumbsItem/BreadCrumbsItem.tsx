import { clsx } from 'clsx';
import { type AllHTMLAttributes, type ElementType } from 'react';

import { Typography } from '../../../../Typography';
import styles from './BreadCrumbsItem.module.scss';

export interface BreadCrumbsItemProps extends AllHTMLAttributes<HTMLElement> {
  Component?: ElementType
}

export const BreadCrumbsItem = ({
  Component = 'div',
  className,
  children,
  ...restProps
}: BreadCrumbsItemProps): JSX.Element => (
  <Component className={clsx(styles.wrapper, className)} {...restProps}>
    <Typography.Label variant="medium-strong">{children}</Typography.Label>
  </Component>
);
