import classNames from 'classnames/bind';
import type { PropsWithChildren } from 'react';

import styles from './List.module.css';

import { defineSlotComponent, getSlots } from '@/lib';

const cx = classNames.bind(styles);

export const List = defineSlotComponent(
  ({ children }: PropsWithChildren) => {
    const { item, others } = getSlots(children, List);

    return (
      <ul className={cx('list')}>
        {Array.isArray(item) ? (
          item.map((i, idx) => <li key={idx}>{i}</li>)
        ) : (
          <li>{item}</li>
        )}
        {others}
      </ul>
    );
  },
  {
    slots: {
      item: ({ children }: PropsWithChildren) => <>{children}</>,
    },
    rules: {
      item: 'multiple',
    },
  },
);
