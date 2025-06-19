import classNames from 'classnames/bind';
import {
  forwardRef,
  useImperativeHandle,
  useRef,
  type PropsWithChildren,
} from 'react';

import styles from './List.module.css';

import { defineSlotComponent, getSlots } from '@/lib';

const cx = classNames.bind(styles);

export interface ListHandle {
  scrollToIndex: (index: number) => void;
}

export const List = defineSlotComponent(
  forwardRef<ListHandle, PropsWithChildren>(
    ({ children }: PropsWithChildren, ref) => {
      const { item, others } = getSlots(children, List);
      const listRef = useRef<HTMLUListElement>(null);

      useImperativeHandle(ref, () => ({
        scrollToIndex: (index: number) => {
          if (Array.isArray(item) && index < item?.length) {
            listRef.current?.children[index].scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        },
      }));

      return (
        <ul className={cx('list')} ref={listRef}>
          {Array.isArray(item) ? (
            item.map((i, idx) => <li key={idx}>{i}</li>)
          ) : (
            <li>{item}</li>
          )}
          {others}
        </ul>
      );
    },
  ),
  {
    slots: {
      item: ({ children }: PropsWithChildren) => <>{children}</>,
    },
    rules: {
      item: 'multiple',
    },
  },
);
