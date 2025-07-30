import { arrow, flip, offset, type Placement, shift, useFloating } from '@floating-ui/react-dom';
import { clsx } from 'clsx';
import { type ComponentProps, forwardRef, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { usePlatform } from '../../hooks';
import { Typography } from '../Typography';
import styles from './Tooltip.module.scss';

export interface TooltipProps extends ComponentProps<'div'> {
  targetRef: React.RefObject<HTMLElement>
  placement?: Placement
  mode?: 'light' | 'dark'
  open?: boolean
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>((props, forwardedRef) => {
  const {
    targetRef,
    placement = 'top',
    mode = 'light',
    children,
    open = true,
    className,
    style,
    ...rest
  } = props;

  const arrowRef = useRef<HTMLDivElement | null>(null);
  const { x, y, strategy, placement: finalPlacement, refs, middlewareData } = useFloating({
    placement,
    middleware: [offset(8), flip(), shift({ padding: 8 }), arrow({ element: arrowRef })]
  });

  useEffect(() => {
    refs.setReference(targetRef.current);
  }, [refs, targetRef]);

  if (!open) return null;

  const staticSide: Record<string, string> = {
    top: 'bottom',
    right: 'left',
    bottom: 'top',
    left: 'right'
  };
  const arrowStyle = middlewareData.arrow
    ? {
      left: middlewareData.arrow.x != null ? `${middlewareData.arrow.x}px` : '',
      top: middlewareData.arrow.y != null ? `${middlewareData.arrow.y}px` : '',
      [staticSide[finalPlacement.split('-')[0]]]: '-6px'
    }
    : undefined;

  const platform = usePlatform();
  const background = mode === 'dark'
    ? platform === 'ios'
      ? 'var(--background-neutral-floating-i-os)'
      : 'var(--background-neutral-floating-android)'
    : 'var(--background-surface-floating)';

  const rootClassName = clsx(
    styles.Tooltip,
    styles[`Tooltip_mode_${mode}`],
    styles[`Tooltip_platform_${platform}`],
    className
  );

  const portal = (
    <div
      ref={(node) => {
        refs.setFloating(node);
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else if (forwardedRef) {
          (forwardedRef).current = node;
        }
      }}
      style={{ position: strategy, top: y ?? 0, left: x ?? 0, ...style, '--tooltip-background': background } as React.CSSProperties}
      className={rootClassName}
      {...rest}
    >
      <div ref={arrowRef} style={arrowStyle} className={styles.Tooltip__arrow}>
        <svg width={22} height={7} viewBox="0 0 22 7" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.804 0C6.387 0 6.94 6 .865 6h19.878c-6.074 0-5.521-6-9.939-6Z" fill="currentColor" />
        </svg>
      </div>
      <Typography.Label variant="small-strong" asChild>
        <span>{children}</span>
      </Typography.Label>
    </div>
  );

  return createPortal(portal, document.body);
});

Tooltip.displayName = 'Tooltip';
