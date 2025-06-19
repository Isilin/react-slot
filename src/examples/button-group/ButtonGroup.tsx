import classNames from 'classnames/bind';
import { memo, type PropsWithChildren } from 'react';

import styles from './ButtonGroup.module.css';

import { defineSlotComponent, getSlots } from '@/lib';

const cx = classNames.bind(styles);

const MemoizedButton = memo(({ children }: PropsWithChildren) => (
  <button className={cx('button')}>{children}</button>
));

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
      button: MemoizedButton,
    },
    rules: {
      button: 'multiple',
    },
    extras: {
      Divider: () => <span className={cx('divider')} />,
    },
  },
);
