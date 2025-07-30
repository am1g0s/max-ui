import { clsx } from 'clsx';
import { Children, type HTMLAttributes, type ReactNode } from 'react';

import { Icon16Chevron } from '../../icons';
import styles from './Breadcrumbs.module.scss';
import { BreadCrumbsItem } from './components/BreadCrumbsItem/BreadCrumbsItem';
import { IconDot } from './icons/dot';
import { IconSlash } from './icons/slash';

export interface BreadcrumbsProps extends HTMLAttributes<HTMLDivElement> {
  divider?: 'dot' | 'slash' | 'chevron'
  children?: ReactNode
}

export const Breadcrumbs = ({
  divider = 'dot',
  className,
  children
}: BreadcrumbsProps): JSX.Element => (
  <div className={clsx(styles.wrapper, className)}>
    {Children.map(children, (child, index) => (
      <>
        {child}
        {index !== Children.count(children) - 1 && (
          <div className={styles.divider}>
            {divider === 'dot' && <IconDot />}
            {divider === 'slash' && <IconSlash />}
            {divider === 'chevron' && <Icon16Chevron className={styles.chevron} />}
          </div>
        )}
      </>
    ))}
  </div>
);

Breadcrumbs.Item = BreadCrumbsItem;
