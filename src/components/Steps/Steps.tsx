import { clsx } from 'clsx';
import { forwardRef, type HTMLAttributes } from 'react';

import styles from './Steps.module.scss';

export interface StepsProps extends HTMLAttributes<HTMLDivElement> {
  /** Total number of steps. */
  count: number
  /** Current progress, indicating how many steps have been completed. Progress is 0-indexed and goes up to `count`. */
  progress: number
}

/**
 * Renders a visual indicator of steps or progress in a process, such as a tutorial or a multi-step form.
 * It visually represents total steps and current progress.
 */
export const Steps = forwardRef<HTMLDivElement, StepsProps>((props, ref) => {
  const { className, count, progress, ...rest } = props;

  return (
    <div ref={ref} className={clsx(styles.Steps, className)} {...rest}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={clsx(styles.Steps__step, {
            [styles.Steps__step_active]: i < progress
          })}
        />
      ))}
    </div>
  );
});

Steps.displayName = 'Steps';
