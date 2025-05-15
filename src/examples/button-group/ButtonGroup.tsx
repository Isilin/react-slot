import classNames from 'classnames/bind';
import type { PropsWithChildren } from 'react';

import styles from './ButtonGroup.module.css';

import { defineSlotComponent, getSlots } from '@/lib';

const cx = classNames.bind(styles);

export const ButtonGroup = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { button, others } = getSlots(children, ButtonGroup);

    return (
      <div className={cx('container')}>
        {Array.isArray(button) ? button : [button]}
        {others}
      </div>
    );
  },
  {
    slots: {
      button: ({ children }: PropsWithChildren) => (
        <button className={cx('button')}>{children}</button>
      ),
    },
    rules: {
      button: 'multiple',
    },
    extras: {
      Divider: () => <span className={cx('divider')} />,
    },
  },
);
