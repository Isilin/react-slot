import { PropsWithChildren } from 'react';
import { defineSlotComponent, getSlots } from '../../lib';

import classNames from 'classnames/bind';
import styles from './ButtonGroup.module.css';
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
