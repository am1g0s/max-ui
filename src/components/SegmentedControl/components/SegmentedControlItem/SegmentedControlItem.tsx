'use client';

import { clsx } from 'clsx';
import { type ButtonHTMLAttributes } from 'react';

import { usePlatform } from '../../../../hooks';
import { Tappable } from '../../../Tappable';
import { TypographyLabel } from '../../../Typography/parts/TypographyLabel';
import styles from './SegmentedControlItem.module.scss';

export interface SegmentedControlItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean
}

export const SegmentedControlItem = ({
  selected,
  className,
  children,
  ...restProps
}: SegmentedControlItemProps): JSX.Element => {
  const platform = usePlatform();
  return (
    <Tappable
      role="tab"
      Component="button"
      className={clsx(
        styles.SegmentedControlItem,
        platform === 'ios' && styles.SegmentedControlItem_platform_ios,
        className
      )}
      {...restProps}
    >
      <TypographyLabel variant={selected ? 'medium-strong' : 'medium'}>
        {children}
      </TypographyLabel>
    </Tappable>
  );
};

SegmentedControlItem.displayName = 'SegmentedControl.Item';
